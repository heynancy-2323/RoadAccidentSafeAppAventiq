import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const { user, token } = useAuth();

  useEffect(() => {
    if (!user || !token) return;

    // Initialize socket connection
    const socketInstance = io(import.meta.env.VITE_API_URL || 'http://localhost:5000', {
      auth: { token },
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000
    });

    // Connection events
    socketInstance.on('connect', () => {
      console.log('Socket connected');
      setIsConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('Socket disconnected');
      setIsConnected(false);
    });

    socketInstance.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      setIsConnected(false);
    });

    setSocket(socketInstance);

    // Cleanup on unmount
    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [user, token]);

  // Socket event handlers
  const joinConversation = (userId) => {
    if (socket && isConnected) {
      socket.emit('join_conversation', userId);
    }
  };

  const leaveConversation = (userId) => {
    if (socket && isConnected) {
      socket.emit('leave_conversation', userId);
    }
  };

  const sendMessage = (message) => {
    if (socket && isConnected) {
      socket.emit('new_message', message);
    }
  };

  const markMessagesAsRead = (messageIds, conversationPartnerId) => {
    if (socket && isConnected) {
      socket.emit('mark_messages_read', { messageIds, conversationPartnerId });
    }
  };

  const setTypingStatus = (isTyping, conversationPartnerId) => {
    if (socket && isConnected) {
      socket.emit('typing', { isTyping, conversationPartnerId });
    }
  };

  const setUserStatus = (status) => {
    if (socket && isConnected) {
      socket.emit('set_status', status);
    }
  };

  const value = {
    socket,
    isConnected,
    joinConversation,
    leaveConversation,
    sendMessage,
    markMessagesAsRead,
    setTypingStatus,
    setUserStatus
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext; 