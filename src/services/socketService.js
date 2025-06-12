import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // Authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error: No token provided'));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded.userId) {
        return next(new Error('Authentication error: Invalid token'));
      }

      // Fetch user data
      const user = await User.findById(decoded.userId).select('-password_hash');
      if (!user) {
        return next(new Error('Authentication error: User not found'));
      }

      // Attach user data to socket
      socket.user = {
        _id: user._id,
        username: user.username,
        role: user.role,
        name: user.name
      };

      next();
    } catch (err) {
      console.error('Socket authentication error:', err);
      next(new Error('Authentication error: ' + err.message));
    }
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.user._id);

    // Join user's personal room for direct messages
    socket.join(`user:${socket.user._id}`);

    // Handle joining a conversation
    socket.on('join_conversation', (userId) => {
      const roomId = getConversationRoomId(socket.user._id, userId);
      socket.join(roomId);
      console.log(`User ${socket.user._id} joined conversation with ${userId}`);
    });

    // Handle leaving a conversation
    socket.on('leave_conversation', (userId) => {
      const roomId = getConversationRoomId(socket.user._id, userId);
      socket.leave(roomId);
      console.log(`User ${socket.user._id} left conversation with ${userId}`);
    });

    // Handle new message
    socket.on('new_message', async (message) => {
      try {
        // Broadcast to the conversation room
        const roomId = getConversationRoomId(message.sender_user_id, message.recipient_user_id);
        io.to(roomId).emit('message_received', message);

        // Notify recipient if they're not in the conversation
        io.to(`user:${message.recipient_user_id}`).emit('new_message_notification', {
          message,
          unreadCount: await getUnreadCount(message.recipient_user_id)
        });
      } catch (error) {
        console.error('Error handling new message:', error);
        socket.emit('error', { message: 'Error sending message' });
      }
    });

    // Handle message read status
    socket.on('mark_messages_read', async ({ messageIds, conversationPartnerId }) => {
      try {
        const roomId = getConversationRoomId(socket.user._id, conversationPartnerId);
        io.to(roomId).emit('messages_read', { messageIds });
      } catch (error) {
        console.error('Error marking messages as read:', error);
        socket.emit('error', { message: 'Error marking messages as read' });
      }
    });

    // Handle typing status
    socket.on('typing', ({ isTyping, conversationPartnerId }) => {
      const roomId = getConversationRoomId(socket.user._id, conversationPartnerId);
      socket.to(roomId).emit('user_typing', {
        userId: socket.user._id,
        isTyping
      });
    });

    // Handle user status (online/offline)
    socket.on('set_status', (status) => {
      io.emit('user_status_changed', {
        userId: socket.user._id,
        status
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.user._id);
      io.emit('user_status_changed', {
        userId: socket.user._id,
        status: 'offline'
      });
    });
  });

  return io;
};

// Helper function to generate consistent room IDs for conversations
const getConversationRoomId = (userId1, userId2) => {
  const sortedIds = [userId1, userId2].sort();
  return `conversation:${sortedIds[0]}:${sortedIds[1]}`;
};

// Helper function to get unread message count
const getUnreadCount = async (userId) => {
  // This should be implemented using your Message model
  // For now, returning a placeholder
  return 0;
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.IO not initialized');
  }
  return io;
}; 