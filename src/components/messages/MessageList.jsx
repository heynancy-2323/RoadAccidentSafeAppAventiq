import React, { useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  Tooltip
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { format } from 'date-fns';

const MessageList = ({ messages }) => {
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!messages || messages.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Typography color="text.secondary">
          No messages yet. Start the conversation!
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      {messages.map((message) => {
        const isOwnMessage = message.sender._id === user.id;
        const showAvatar = !isOwnMessage;

        return (
          <Box
            key={message._id}
            sx={{
              display: 'flex',
              justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
              alignItems: 'flex-end',
              gap: 1
            }}
          >
            {showAvatar && (
              <Avatar
                src={message.sender.avatar}
                alt={message.sender.username}
                sx={{ width: 32, height: 32 }}
              />
            )}
            <Box
              sx={{
                maxWidth: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isOwnMessage ? 'flex-end' : 'flex-start'
              }}
            >
              {!isOwnMessage && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {message.sender.username}
                </Typography>
              )}
              <Tooltip
                title={format(new Date(message.createdAt), 'PPpp')}
                placement={isOwnMessage ? 'left' : 'right'}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    bgcolor: isOwnMessage ? 'primary.main' : 'background.paper',
                    color: isOwnMessage ? 'primary.contrastText' : 'text.primary',
                    borderRadius: 2,
                    border: 1,
                    borderColor: isOwnMessage ? 'transparent' : 'divider'
                  }}
                >
                  <Typography variant="body1">{message.content}</Typography>
                  {message.attachments?.length > 0 && (
                    <Box sx={{ mt: 1 }}>
                      {message.attachments.map((attachment, index) => (
                        <Box
                          key={index}
                          sx={{
                            mt: 1,
                            p: 1,
                            bgcolor: 'action.hover',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          {/* Add attachment preview/icon based on type */}
                          <Typography variant="body2">
                            {attachment.name || 'Attachment'}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Paper>
              </Tooltip>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {format(new Date(message.createdAt), 'p')}
              </Typography>
            </Box>
          </Box>
        );
      })}
      <div ref={messagesEndRef} />
    </Stack>
  );
};

export default MessageList; 