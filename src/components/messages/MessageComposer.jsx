import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Tooltip,
  Typography
} from '@mui/material';
import {
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiIcon
} from '@mui/icons-material';
import debounce from 'lodash/debounce';

const MessageComposer = ({ onSendMessage, onTyping }) => {
  const [message, setMessage] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const textFieldRef = useRef(null);

  // Debounced typing notification
  const debouncedTypingNotification = useCallback(
    debounce((isTyping) => {
      onTyping?.(isTyping);
    }, 500),
    [onTyping]
  );

  // Focus the input when component mounts
  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || isComposing) return;

    onSendMessage(message);
    setMessage('');
    onTyping?.(false);
    textFieldRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    
    // Notify typing status
    if (newMessage.trim()) {
      debouncedTypingNotification(true);
    } else {
      debouncedTypingNotification(false);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
    debouncedTypingNotification(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
    if (!message.trim()) {
      debouncedTypingNotification(false);
    }
  };

  const handleBlur = () => {
    debouncedTypingNotification(false);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: 1,
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
        <Tooltip title="Add attachment">
          <IconButton
            size="small"
            color="primary"
            sx={{ alignSelf: 'flex-end', mb: 0.5 }}
          >
            <AttachFileIcon />
          </IconButton>
        </Tooltip>

        <TextField
          ref={textFieldRef}
          fullWidth
          multiline
          maxRows={4}
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onBlur={handleBlur}
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: 'background.default',
              '& fieldset': {
                borderColor: 'divider'
              },
              '&:hover fieldset': {
                borderColor: 'primary.main'
              }
            }
          }}
        />

        <Tooltip title="Add emoji">
          <IconButton
            size="small"
            color="primary"
            sx={{ alignSelf: 'flex-end', mb: 0.5 }}
          >
            <EmojiIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send message">
          <IconButton
            type="submit"
            color="primary"
            disabled={!message.trim() || isComposing}
            sx={{ alignSelf: 'flex-end', mb: 0.5 }}
          >
            <SendIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default MessageComposer; 