import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useSocket } from '../contexts/SocketContext';
import MessageList from '../components/messages/MessageList';
import ConversationView from '../components/messages/ConversationView';
import ConversationList from '../components/messages/ConversationList';
import { Box, Grid, Paper, Typography, useTheme, useMediaQuery, CircularProgress } from '@mui/material';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { authenticatedFetch } from '../config/api';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from '@mui/material/Button';
import NewConversationModal from '../components/messages/NewConversationModal';

const Messages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, loading: authLoading, error: authError } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const { socket, isConnected, joinConversation, leaveConversation, sendMessage: socketSendMessage } = useSocket();
  const [typingUsers, setTypingUsers] = useState(new Set());
  const [notification, setNotification] = useState(null);
  const [newConversationOpen, setNewConversationOpen] = useState(false);

  // Fetch messages for the current user
  const fetchMessages = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const data = await authenticatedFetch('/api/messages?type=all');
      setMessages(data.messages || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch unread count
  const fetchUnreadCount = async () => {
    if (!user) return;
    
    try {
      const data = await authenticatedFetch('/api/messages/unread-count');
      setUnreadCount(data.unreadCount || 0);
    } catch (err) {
      console.error('Error fetching unread count:', err);
      setUnreadCount(0);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMessages();
      fetchUnreadCount();
    }
  }, [user]);

  useEffect(() => {
    if (!socket || !isConnected || !user) return;

    const handleNewMessage = (message) => {
      console.log('Received new message:', message);
      
      setMessages(prev => {
        // Check if message already exists
        if (prev.some(m => m._id === message._id)) {
          return prev;
        }
        
        // Add the new message to the top of the list
        return [message, ...prev];
      });

      // Show notification if message is from another user
      if (message.sender_user_id._id !== user._id) {
        setNotification({
          type: 'info',
          message: `New message from ${message.sender_user_id.name || message.sender_user_id.username}`
        });
        
        // Update unread count
        setUnreadCount(prev => prev + 1);
      }
    };

    const handleMessageRead = ({ messageIds }) => {
      setMessages(prev => prev.map(message => 
        messageIds.includes(message._id)
          ? { ...message, read_at: new Date().toISOString() }
          : message
      ));
      
      // Update unread count
      fetchUnreadCount();
    };

    const handleUserTyping = ({ userId, isTyping }) => {
      setTypingUsers(prev => {
        const newSet = new Set(prev);
        if (isTyping) {
          newSet.add(userId);
        } else {
          newSet.delete(userId);
        }
        return newSet;
      });
    };

    const handleUserStatus = ({ userId, status }) => {
      setMessages(prev => prev.map(message => {
        if (message.sender_user_id._id === userId) {
          return {
            ...message,
            sender_user_id: { ...message.sender_user_id, status }
          };
        }
        if (message.recipient_user_id._id === userId) {
          return {
            ...message,
            recipient_user_id: { ...message.recipient_user_id, status }
          };
        }
        return message;
      }));
    };

    // Socket event listeners
    socket.on('message_received', handleNewMessage);
    socket.on('new_message', handleNewMessage); // Alternative event name
    socket.on('messages_read', handleMessageRead);
    socket.on('user_typing', handleUserTyping);
    socket.on('user_status_changed', handleUserStatus);

    return () => {
      socket.off('message_received', handleNewMessage);
      socket.off('new_message', handleNewMessage);
      socket.off('messages_read', handleMessageRead);
      socket.off('user_typing', handleUserTyping);
      socket.off('user_status_changed', handleUserStatus);
    };
  }, [socket, isConnected, user]);

  const handleUserSelect = (user) => {
    if (selectedUser) {
      leaveConversation(selectedUser._id);
    }
    setSelectedUser(user);
    if (user) {
      joinConversation(user._id);
      // Mark messages as read when selecting a conversation
      markMessagesAsRead(user._id);
    }
  };

  const markMessagesAsRead = async (userId) => {
    if (!user || !userId) return;
    
    try {
      // Find unread messages from this user
      const unreadMessages = messages.filter(msg => 
        msg.sender_user_id._id === userId && 
        msg.recipient_user_id._id === user._id && 
        !msg.read_at
      );
      
      if (unreadMessages.length > 0) {
        const messageIds = unreadMessages.map(msg => msg._id);
        
        await authenticatedFetch('/api/messages/read', {
          method: 'PUT',
          body: JSON.stringify({ messageIds })
        });
        
        // Update local state
        setMessages(prev => prev.map(message => 
          messageIds.includes(message._id)
            ? { ...message, read_at: new Date().toISOString() }
            : message
        ));
        
        // Emit socket event
        if (socket && isConnected) {
          socket.emit('messages_read', { messageIds });
        }
        
        // Update unread count
        fetchUnreadCount();
      }
    } catch (err) {
      console.error('Error marking messages as read:', err);
    }
  };

  const handleSendMessage = async (content) => {
    if (!selectedUser || !content.trim() || !user) return;

    try {
      // Send message to backend
      const message = await authenticatedFetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient_user_id: selectedUser._id,
          content: content.trim()
        })
      });
      
      console.log('Message sent successfully:', message);
      
      // Add message to local state immediately
      setMessages(prev => {
        // Check if message already exists
        if (prev.some(m => m._id === message._id)) {
          return prev;
        }
        return [message, ...prev];
      });
      
      // Emit socket event to notify other users
      if (socket && isConnected) {
        socketSendMessage(message);
        
        // Also emit to the specific user
        socket.emit('send_message', {
          recipientId: selectedUser._id,
          message: message
        });
      }
      
      return message;
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.message);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      throw err;
    }
  };

  const handleNewConversationStarted = (user) => {
    setNewConversationOpen(false);
    setSelectedUser(user);
    if (user) {
      joinConversation(user._id);
    }
    // Refresh messages to get any new conversation
    fetchMessages();
  };

  if (authLoading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading user data...</Typography>
      </Box>
    );
  }

  if (authError) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">Authentication Error: {authError}</Typography>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Please log in to view messages</Typography>
      </Box>
    );
  }

  if (loading && messages.length === 0) {
    return (
      <Box sx={{ p: 3, height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading messages...</Typography>
      </Box>
    );
  }

  // Improved empty state UI
  if ((!messages || messages.length === 0) && !loading) {
    return (
      <>
        <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 1, color: 'text.secondary' }}>
            No messages yet
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            You have no conversations. Start a new conversation to connect with others!
          </Typography>
          <Button variant="contained" color="primary" size="large" onClick={() => setNewConversationOpen(true)}>
            Start a New Conversation
          </Button>
        </Box>
        <NewConversationModal
          open={newConversationOpen}
          onClose={() => setNewConversationOpen(false)}
          onConversationStarted={handleNewConversationStarted}
        />
      </>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">Error: {error}</Typography>
        <Button 
          variant="contained" 
          onClick={fetchMessages} 
          sx={{ mt: 2 }}
        >
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Grid container sx={{ height: '100%' }}>
          {/* Message List - Always visible on desktop, conditionally on mobile */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            sx={{ 
              display: { 
                xs: selectedUser ? 'none' : 'block',
                md: 'block' 
              },
              height: '100%',
              borderRight: { md: 1 },
              borderColor: 'divider'
            }}
          >
            <MessageList
              messages={messages}
              selectedUser={selectedUser}
              onUserSelect={handleUserSelect}
              unreadCount={unreadCount}
            />
          </Grid>

          {/* Conversation View - Hidden on mobile when list is shown */}
          <Grid 
            item 
            xs={12} 
            md={8} 
            sx={{ 
              display: { 
                xs: selectedUser ? 'block' : 'none',
                md: 'block' 
              },
              height: '100%'
            }}
          >
            {selectedUser ? (
              <>
                <ConversationView
                  user={selectedUser}
                  messages={messages.filter(m => 
                    (m.sender_user_id._id === user._id && m.recipient_user_id._id === selectedUser._id) ||
                    (m.sender_user_id._id === selectedUser._id && m.recipient_user_id._id === user._id)
                  )}
                  currentUser={user}
                  isTyping={typingUsers.has(selectedUser._id)}
                  onSendMessage={handleSendMessage}
                />
                <ConversationList 
                  onUserSelect={handleUserSelect}
                />
              </>
            ) : (
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'background.paper'
              }}>
                <Typography variant="h6" color="text.secondary">
                  Select a conversation to start messaging
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={!!notification}
        autoHideDuration={6000}
        onClose={() => setNotification(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setNotification(null)} 
          severity={notification?.type || 'info'}
          sx={{ width: '100%' }}
        >
          {notification?.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Messages;