import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Divider,
  CircularProgress,
  Fade
} from '@mui/material';
import { useSocket } from '../../contexts/SocketContext';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer';
import { useAuth } from '../../contexts/AuthContext';

const ConversationView = ({ conversation, messages, onSendMessage, isLoading }) => {
  const { socket } = useSocket();
  const { user } = useAuth();
  const [typingUsers, setTypingUsers] = useState(new Set());
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!socket || !conversation) return;

    const handleTyping = ({ userId, username, isTyping }) => {
      if (userId === user.id) return; // Don't show our own typing status

      setTypingUsers(prev => {
        const newSet = new Set(prev);
        if (isTyping) {
          newSet.add(username);
        } else {
          newSet.delete(username);
        }
        return newSet;
      });
    };

    socket.on('typing', handleTyping);

    return () => {
      socket.off('typing', handleTyping);
    };
  }, [socket, conversation, user.id]);

  const handleTyping = (isTyping) => {
    if (!socket || !conversation) return;
    socket.emit('typing', {
      conversationId: conversation._id,
      isTyping
    });
  };

  if (!conversation) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          bgcolor: 'background.default'
        }}
      >
        <Typography color="text.secondary">
          Select a conversation to start messaging
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Conversation Header */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={conversation.participant.avatar}
            alt={conversation.participant.username}
          />
          <Box>
            <Typography variant="subtitle1" component="div">
              {conversation.participant.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {conversation.participant.isOnline ? 'Online' : 'Offline'}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          bgcolor: 'background.default',
          p: 2
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <MessageList messages={messages} />
            <div ref={messagesEndRef} />
          </>
        )}
      </Box>

      {/* Typing Indicator */}
      <Fade in={typingUsers.size > 0}>
        <Box
          sx={{
            px: 2,
            py: 1,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider'
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {Array.from(typingUsers).join(', ')} {typingUsers.size === 1 ? 'is' : 'are'} typing...
          </Typography>
        </Box>
      </Fade>

      {/* Message Composer */}
      <MessageComposer
        onSendMessage={onSendMessage}
        onTyping={handleTyping}
      />
    </Box>
  );
};

export default ConversationView; 