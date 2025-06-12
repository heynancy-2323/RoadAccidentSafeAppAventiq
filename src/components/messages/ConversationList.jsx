import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  Box,
  Badge,
  Divider,
  CircularProgress
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

const ConversationList = ({ onConversationSelect, selectedConversationId }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/messages/conversations');
      setConversations(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching conversations:', err);
      setError('Failed to load conversations');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (conversations.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="text.secondary" align="center">
          No conversations yet
        </Typography>
      </Box>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        borderRight: 1,
        borderColor: 'divider',
        overflow: 'auto'
      }}
    >
      <List sx={{ p: 0 }}>
        {conversations.map((conversation) => {
          const otherParticipant = conversation.participant;
          const isSelected = conversation._id === selectedConversationId;
          const lastMessage = conversation.lastMessage;
          const unreadCount = conversation.unreadCount || 0;

          return (
            <React.Fragment key={conversation._id}>
              <ListItem
                button
                selected={isSelected}
                onClick={() => onConversationSelect(conversation)}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: 'action.selected'
                  },
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    color={otherParticipant.isOnline ? 'success' : 'default'}
                  >
                    <Avatar
                      src={otherParticipant.avatar}
                      alt={otherParticipant.username}
                    />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{
                        fontWeight: unreadCount > 0 ? 'bold' : 'normal'
                      }}
                    >
                      {otherParticipant.username}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        fontWeight: unreadCount > 0 ? 'bold' : 'normal'
                      }}
                    >
                      {lastMessage
                        ? `${lastMessage.sender._id === user.id ? 'You: ' : ''}${
                            lastMessage.content
                          }`
                        : 'No messages yet'}
                    </Typography>
                  }
                />
                {unreadCount > 0 && (
                  <Badge
                    badgeContent={unreadCount}
                    color="primary"
                    sx={{ ml: 1 }}
                  />
                )}
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
};

export default ConversationList; 