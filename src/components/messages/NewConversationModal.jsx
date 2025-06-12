import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  Button, 
  TextField, 
  CircularProgress, 
  Box, 
  Typography, 
  Autocomplete, 
  Paper, 
  useTheme,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
  InputAdornment
} from '@mui/material';
import { 
  Add as AddIcon, 
  Send as SendIcon, 
  AttachFile as AttachFileIcon,
  Close as CloseIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { authenticatedFetch } from '../../config/api';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer';

const NewConversationModal = ({ open, onClose, onConversationStarted }) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);
  const [messageText, setMessageText] = useState('');
  const theme = useTheme();

  // Fetch all users when modal opens
  useEffect(() => {
    if (open) {
      setLoading(true);
      authenticatedFetch('/api/users/all')
        .then(data => setUsers(data.users || []))
        .catch(() => setUsers([]))
        .finally(() => setLoading(false));
    } else {
      setUsers([]);
      setSearch('');
      setSelectedUser(null);
      setMessages([]);
      setMessageText('');
    }
  }, [open]);

  // Start conversation (fetch messages if any)
  const handleUserSelect = async (user) => {
    setSelectedUser(user);
    setMessages([]);
    if (!user) return;
    try {
      const data = await authenticatedFetch(`/api/messages/conversation/${user._id}`);
      setMessages(data.messages || []);
    } catch (err) {
      setMessages([]);
    }
  };

  // Send message
  const handleSendMessage = async () => {
    if (!selectedUser || !messageText.trim() || sending) return;
    setSending(true);
    try {
      const message = await authenticatedFetch('/api/messages', {
        method: 'POST',
        body: JSON.stringify({
          recipient_user_id: selectedUser._id,
          content: messageText.trim()
        })
      });
      setMessages((prev) => [...prev, message]);
      setMessageText('');
      if (onConversationStarted) onConversationStarted(selectedUser);
    } catch (err) {
      // Optionally show error
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setSearch('');
    setUsers([]);
    setSelectedUser(null);
    setMessages([]);
    setMessageText('');
    onClose();
  };

  const filteredUsers = users.filter(user => 
    (user.name || user.username || '').toLowerCase().includes(search.toLowerCase())
  );

  const getInitials = (user) => {
    const name = user.name || user.username || '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#4CAF50';
      case 'offline': return '#9E9E9E';
      default: return '#FF9800';
    }
  };

  const getRoleColor = (role) => {
    switch (role?.toLowerCase()) {
      case 'field officer': return '#4CAF50';
      case 'reviewer': return '#E91E63';
      case 'case manager': return '#FF9800';
      case 'administrator': return '#2196F3';
      default: return '#9E9E9E';
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        sx: {
          height: '80vh',
          maxHeight: '600px',
          borderRadius: 3,
          overflow: 'hidden',
          p: 0
        }
      }}
    >
      <DialogContent sx={{ p: 0, height: '100%', display: 'flex' }}>
        {/* Left Sidebar - Conversations List */}
        <Box sx={{ 
          width: 350, 
          borderRight: '1px solid #e0e0e0', 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: '#f8f9fa'
        }}>
          {/* Header */}
          <Box sx={{ 
            p: 2, 
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton sx={{ color: '#1976d2' }}>
                <AddIcon />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                Messages
              </Typography>
            </Box>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Filter Tabs */}
          <Box sx={{ p: 2, pb: 1 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {['All', 'Unread', 'Field Officers', 'Reviewers'].map((tab) => (
                <Button
                  key={tab}
                  size="small"
                  variant={tab === 'All' ? 'contained' : 'text'}
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    py: 0.5,
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    ...(tab === 'All' && {
                      bgcolor: '#1976d2',
                      color: 'white',
                      '&:hover': { bgcolor: '#1565c0' }
                    })
                  }}
                >
                  {tab}
                </Button>
              ))}
            </Box>

            {/* Search */}
            <TextField
              fullWidth
              size="small"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#9e9e9e', fontSize: 20 }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e0e0e0'
                  }
                }
              }}
            />
          </Box>

          {/* Users List */}
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <CircularProgress size={24} />
              </Box>
            ) : (
              <List sx={{ p: 0 }}>
                {filteredUsers.map((user, index) => (
                  <React.Fragment key={user._id}>
                    <ListItem
                      button
                      onClick={() => handleUserSelect(user)}
                      selected={selectedUser?._id === user._id}
                      sx={{
                        py: 1.5,
                        px: 2,
                        '&.Mui-selected': {
                          bgcolor: '#e3f2fd',
                          borderRight: '3px solid #1976d2'
                        },
                        '&:hover': {
                          bgcolor: '#f5f5f5'
                        }
                      }}
                    >
                      <ListItemAvatar>
                        <Box sx={{ position: 'relative' }}>
                          <Avatar 
                            sx={{ 
                              width: 40, 
                              height: 40,
                              bgcolor: getRoleColor(user.role),
                              fontSize: '0.875rem',
                              fontWeight: 600
                            }}
                          >
                            {getInitials(user)}
                          </Avatar>
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              right: 0,
                              width: 12,
                              height: 12,
                              bgcolor: getStatusColor(user.status),
                              borderRadius: '50%',
                              border: '2px solid white'
                            }}
                          />
                        </Box>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                            {user.name || user.username}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography variant="caption" sx={{ color: getRoleColor(user.role), fontWeight: 500 }}>
                              {user.role || 'User'} • {user.status || 'offline'}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < filteredUsers.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
                {!loading && filteredUsers.length === 0 && (
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography color="text.secondary" variant="body2">
                      No users found
                    </Typography>
                  </Box>
                )}
              </List>
            )}
          </Box>
        </Box>

        {/* Right Side - Chat Area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {selectedUser ? (
            <>
              {/* Chat Header */}
              <Box sx={{ 
                p: 2, 
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'white'
              }}>
                <Avatar 
                  sx={{ 
                    width: 40, 
                    height: 40,
                    bgcolor: getRoleColor(selectedUser.role),
                    mr: 2
                  }}
                >
                  {getInitials(selectedUser)}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                    {selectedUser.name || selectedUser.username}
                  </Typography>
                  <Typography variant="caption" sx={{ color: getRoleColor(selectedUser.role), fontWeight: 500 }}>
                    {selectedUser.role || 'User'} • {selectedUser.status || 'offline'}
                  </Typography>
                </Box>
              </Box>

              {/* Messages Area */}
              <Box sx={{ 
                flex: 1, 
                overflow: 'auto', 
                p: 2,
                bgcolor: '#f8f9fa'
              }}>
                {messages.length === 0 ? (
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center'
                  }}>
                    <Typography color="text.secondary" variant="body1" sx={{ mb: 1 }}>
                      No messages yet. Start chatting!
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      Send your first message to {selectedUser.name || selectedUser.username}
                    </Typography>
                  </Box>
                ) : (
                  <MessageList messages={messages} />
                )}
              </Box>

              {/* Message Input */}
              <Box sx={{ 
                p: 2, 
                borderTop: '1px solid #e0e0e0',
                bgcolor: 'white'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                  <IconButton size="small" sx={{ mb: 0.5 }}>
                    <AttachFileIcon />
                  </IconButton>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    variant="outlined"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        bgcolor: '#f8f9fa',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e0e0e0'
                        }
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleSendMessage}
                    disabled={!messageText.trim() || sending}
                    sx={{
                      minWidth: 48,
                      height: 40,
                      borderRadius: 3,
                      bgcolor: '#1976d2',
                      '&:hover': { bgcolor: '#1565c0' }
                    }}
                  >
                    {sending ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              p: 4,
              textAlign: 'center'
            }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#1a1a1a' }}>
                Start a New Conversation
              </Typography>
              <Typography color="text.secondary" variant="body1">
                Select a user from the list to start chatting
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewConversationModal;


