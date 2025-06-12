import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
  getUserMessages,
  getConversation,
  sendMessage,
  markAsRead,
  deleteMessage,
  getUnreadCount,
  getConversations,
  getMessages,
  createConversation
} from '../controllers/messageController.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Get all messages for the authenticated user
router.get('/', getUserMessages);

// Get conversation with a specific user
router.get('/conversation/:userId', getConversation);

// Get all conversations for the current user
router.get('/conversations', getConversations);

// Get messages for a specific conversation
router.get('/conversations/:conversationId/messages', getMessages);

// Send a new message
router.post('/', sendMessage);

// Send a new message to a specific conversation
router.post('/conversations/:conversationId/messages', sendMessage);

// Mark messages as read
router.post('/mark-read', markAsRead);

// Delete a message
router.delete('/:messageId', deleteMessage);

// Get unread message count
router.get('/unread-count', getUnreadCount);

// Create a new conversation
router.post('/conversations', createConversation);

export default router; 