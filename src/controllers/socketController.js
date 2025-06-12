const handleConnection = (io, socket) => {
  console.log('User connected:', socket.user.id);

  // Join user's personal room for direct messages
  socket.join(socket.user.id);

  // Update user's online status
  updateUserStatus(socket.user.id, true);

  // Handle joining conversations
  socket.on('join_conversation', (conversationId) => {
    socket.join(conversationId);
    console.log(`User ${socket.user.id} joined conversation ${conversationId}`);
  });

  // Handle leaving conversations
  socket.on('leave_conversation', (conversationId) => {
    socket.leave(conversationId);
    console.log(`User ${socket.user.id} left conversation ${conversationId}`);
  });

  // Handle new messages
  socket.on('new_message', async (data) => {
    try {
      const { conversationId, content, attachments } = data;
      
      // Save message to database
      const message = await Message.create({
        conversation: conversationId,
        sender: socket.user.id,
        content,
        attachments
      });

      // Populate sender details
      await message.populate('sender', 'username avatar');

      // Broadcast to all users in the conversation
      io.to(conversationId).emit('message', message);

      // Update conversation last message
      await Conversation.findByIdAndUpdate(conversationId, {
        lastMessage: message._id,
        updatedAt: new Date()
      });

      // Notify other participants
      const conversation = await Conversation.findById(conversationId)
        .populate('participants', 'id');

      conversation.participants.forEach(participant => {
        if (participant.id !== socket.user.id) {
          io.to(participant.id).emit('conversation_updated', {
            conversationId,
            lastMessage: message
          });
        }
      });
    } catch (error) {
      console.error('Error handling new message:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  // Handle typing status
  socket.on('typing', async (data) => {
    try {
      const { conversationId, isTyping } = data;
      
      // Get conversation participants
      const conversation = await Conversation.findById(conversationId)
        .populate('participants', 'id username');

      // Broadcast typing status to other participants
      conversation.participants.forEach(participant => {
        if (participant.id !== socket.user.id) {
          io.to(participant.id).emit('typing', {
            conversationId,
            userId: socket.user.id,
            username: socket.user.username,
            isTyping
          });
        }
      });
    } catch (error) {
      console.error('Error handling typing status:', error);
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.user.id);
    updateUserStatus(socket.user.id, false);
  });
}; 