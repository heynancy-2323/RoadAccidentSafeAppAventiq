import React, { useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Divider,
  useTheme
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

const Conversation = ({ user, messages, currentUser }) => {
  const messagesEndRef = useRef(null);
  const theme = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
      '#8bc34a', '#cddc39', '#ffc107', '#ff9800', '#ff5722'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = new Date(message.sent_at).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  return (
    <Box sx={{ 
      height: 'calc(100% - 64px)', // Subtract composer height
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.default'
    }}>
      {/* Chat Header */}
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
            sx={{
              bgcolor: getAvatarColor(user.name),
              color: 'white'
            }}
          >
            {getInitials(user.name)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.role}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Messages Area */}
      <Box sx={{ 
        flex: 1,
        overflow: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <Box key={date}>
            {/* Date Separator */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              my: 2,
              '&::before, &::after': {
                content: '""',
                flex: 1,
                borderBottom: 1,
                borderColor: 'divider'
              }
            }}>
              <Typography
                variant="caption"
                sx={{
                  mx: 2,
                  color: 'text.secondary',
                  bgcolor: 'background.paper',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1
                }}
              >
                {new Date(date).toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Box>

            {/* Messages */}
            {messages.map((message, index) => {
              const isOwnMessage = message.sender_user_id._id === currentUser._id;
              const showAvatar = index === 0 || 
                messages[index - 1].sender_user_id._id !== message.sender_user_id._id;

              return (
                <Box
                  key={message._id}
                  sx={{
                    display: 'flex',
                    justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
                    mb: 1
                  }}
                >
                  {!isOwnMessage && showAvatar && (
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        mr: 1,
                        mt: 'auto',
                        bgcolor: getAvatarColor(message.sender_user_id.name),
                        color: 'white',
                        fontSize: '0.875rem'
                      }}
                    >
                      {getInitials(message.sender_user_id.name)}
                    </Avatar>
                  )}
                  {!isOwnMessage && !showAvatar && <Box sx={{ width: 40 }} />}
                  
                  <Box
                    sx={{
                      maxWidth: '70%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isOwnMessage ? 'flex-end' : 'flex-start'
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        bgcolor: isOwnMessage ? 'primary.main' : 'grey.100',
                        color: isOwnMessage ? 'primary.contrastText' : 'text.primary',
                        borderRadius: 2,
                        borderTopRightRadius: isOwnMessage ? 0 : 2,
                        borderTopLeftRadius: !isOwnMessage ? 0 : 2
                      }}
                    >
                      <Typography variant="body2">
                        {message.content}
                      </Typography>
                    </Paper>
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 0.5,
                        color: 'text.secondary',
                        fontSize: '0.75rem'
                      }}
                    >
                      {formatDistanceToNow(new Date(message.sent_at), { addSuffix: true })}
                      {isOwnMessage && message.read_at && ' · Read'}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>
    </Box>
  );
};

export default Conversation; 