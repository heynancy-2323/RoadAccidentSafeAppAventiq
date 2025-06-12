import Message from '../models/Message.js';
import User from '../models/User.js';
import Conversation from '../models/Conversation.js';

// Get all messages for a user (both sent and received)
export const getUserMessages = async (req, res) => {
  try {
    const userId = req.user._id;
    const { page = 1, limit = 20, type = 'all' } = req.query;
    
    const query = type === 'sent' 
      ? { sender_user_id: userId }
      : type === 'received'
      ? { recipient_user_id: userId }
      : {
          $or: [
            { sender_user_id: userId },
            { recipient_user_id: userId }
          ]
        };

    const messages = await Message.find(query)
      .sort({ sent_at: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('sender_user_id', 'name username avatar status role')
      .populate('recipient_user_id', 'name username avatar status role')
      .populate('report_id', 'address description')
      .populate('case_id', 'status classification');

    const total = await Message.countDocuments(query);

    res.json({
      success: true,
      messages,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalMessages: total
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching messages', 
      error: error.message 
    });
  }
};

// Get conversation between two users
export const getConversation = async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUserId = req.user._id;
    const { page = 1, limit = 20 } = req.query;

    const query = {
      $or: [
        { sender_user_id: currentUserId, recipient_user_id: userId },
        { sender_user_id: userId, recipient_user_id: currentUserId }
      ]
    };

    const messages = await Message.find(query)
      .sort({ sent_at: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('sender_user_id', 'name username avatar status role')
      .populate('recipient_user_id', 'name username avatar status role')
      .populate('report_id', 'address description')
      .populate('case_id', 'status classification');

    const total = await Message.countDocuments(query);

    // Mark unread messages as read
    const updateResult = await Message.updateMany(
      {
        sender_user_id: userId,
        recipient_user_id: currentUserId,
        read_at: null
      },
      { read_at: new Date() }
    );

    console.log(`Marked ${updateResult.modifiedCount} messages as read`);

    res.json({
      success: true,
      messages,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalMessages: total
    });
  } catch (error) {
    console.error('Error fetching conversation:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching conversation', 
      error: error.message 
    });
  }
};

// Send a new message
export const sendMessage = async (req, res) => {
  try {
    const { recipient_user_id, content, report_id, case_id } = req.body;
    const sender_user_id = req.user._id;

    // Validate input
    if (!recipient_user_id || !content || !content.trim()) {
      return res.status(400).json({ 
        success: false,
        message: 'Recipient and message content are required' 
      });
    }

    // Validate recipient exists
    const recipient = await User.findById(recipient_user_id);
    if (!recipient) {
      return res.status(404).json({ 
        success: false,
        message: 'Recipient user not found' 
      });
    }

    // Create the message
    const message = new Message({
      sender_user_id,
      recipient_user_id,
      content: content.trim(),
      report_id: report_id || null,
      case_id: case_id || null,
      sent_at: new Date()
    });

    // Save the message
    await message.save();

    // Populate the message with user details
    await message.populate('sender_user_id', 'name username avatar status role');
    await message.populate('recipient_user_id', 'name username avatar status role');
    
    if (report_id) {
      await message.populate('report_id', 'address description');
    }
    if (case_id) {
      await message.populate('case_id', 'status classification');
    }

    console.log('Message created and populated:', message);

    // Return the populated message
    res.status(201).json(message);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error sending message', 
      error: error.message 
    });
  }
};

// Mark messages as read
export const markAsRead = async (req, res) => {
  try {
    const { messageIds } = req.body;
    const userId = req.user._id;

    if (!messageIds || !Array.isArray(messageIds) || messageIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Message IDs are required'
      });
    }

    const result = await Message.updateMany(
      {
        _id: { $in: messageIds },
        recipient_user_id: userId,
        read_at: null
      },
      { read_at: new Date() }
    );

    console.log(`Marked ${result.modifiedCount} messages as read`);

    res.json({ 
      success: true,
      message: 'Messages marked as read',
      modifiedCount: result.modifiedCount 
    });
  } catch (error) {
    console.error('Error marking messages as read:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error marking messages as read', 
      error: error.message 
    });
  }
};

// Delete a message (soft delete - only for sender)
export const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    const userId = req.user._id;

    const message = await Message.findOne({
      _id: messageId,
      sender_user_id: userId
    });

    if (!message) {
      return res.status(404).json({ 
        success: false,
        message: 'Message not found or unauthorized' 
      });
    }

    // Actually delete the message
    await message.deleteOne();

    res.json({ 
      success: true,
      message: 'Message deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error deleting message', 
      error: error.message 
    });
  }
};

// Get unread message count
export const getUnreadCount = async (req, res) => {
  try {
    const userId = req.user._id;

    // First check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'User not found',
        unreadCount: 0 
      });
    }

    // Get unread count
    const count = await Message.countDocuments({
      recipient_user_id: userId,
      read_at: null
    });

    // Always return a valid response with unreadCount
    res.json({ 
      success: true,
      unreadCount: count || 0 
    });
  } catch (error) {
    console.error('Error getting unread count:', error);
    // Return a valid response even in case of error
    res.status(500).json({ 
      success: false,
      message: 'Error getting unread count',
      error: error.message,
      unreadCount: 0 
    });
  }
};

// Get all conversations for the current user
export const getConversations = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const conversations = await Conversation.find({
      participants: userId
    })
    .populate('participants', 'name username avatar status role')
    .populate('lastMessage')
    .sort({ updatedAt: -1 });

    // Transform the data to include participant info
    const transformedConversations = conversations.map(conv => {
      const otherParticipant = conv.participants.find(p => p._id.toString() !== userId.toString());
      return {
        _id: conv._id,
        participant: otherParticipant,
        lastMessage: conv.lastMessage,
        updatedAt: conv.updatedAt,
        unreadCount: conv.unreadCount || 0
      };
    });

    res.json({
      success: true,
      conversations: transformedConversations
    });
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching conversations', 
      error: error.message 
    });
  }
};

// Get messages for a specific conversation
export const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const userId = req.user._id;
    const { page = 1, limit = 20 } = req.query;

    // Verify user is part of the conversation
    const conversation = await Conversation.findOne({
      _id: conversationId,
      participants: userId
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: 'Conversation not found or unauthorized'
      });
    }

    // Get messages
    const messages = await Message.find({ conversation: conversationId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('sender', 'name username avatar status role');

    // Mark messages as read
    await Message.updateMany(
      {
        conversation: conversationId,
        sender: { $ne: userId },
        readAt: null
      },
      { readAt: new Date() }
    );

    // Update unread count
    conversation.unreadCount = 0;
    await conversation.save();

    const total = await Message.countDocuments({ conversation: conversationId });

    res.json({
      success: true,
      messages: messages.reverse(),
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalMessages: total
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching messages',
      error: error.message
    });
  }
};

// Create a new conversation
export const createConversation = async (req, res) => {
  try {
    const { participantId } = req.body;
    const userId = req.user._id;

    if (!participantId) {
      return res.status(400).json({
        success: false,
        message: 'Participant ID is required'
      });
    }

    // Check if conversation already exists
    const existingConversation = await Conversation.findOne({
      participants: { 
        $all: [userId, participantId],
        $size: 2
      }
    });

    if (existingConversation) {
      return res.json({
        success: true,
        conversation: existingConversation
      });
    }

    // Verify participant exists
    const participant = await User.findById(participantId);
    if (!participant) {
      return res.status(404).json({
        success: false,
        message: 'Participant not found'
      });
    }

    // Create new conversation
    const conversation = new Conversation({
      participants: [userId, participantId],
      lastMessage: null,
      unreadCount: 0
    });

    await conversation.save();

    // Populate participant info
    await conversation.populate('participants', 'name username avatar status role');

    // Transform the response
    const otherParticipant = conversation.participants.find(
      p => p._id.toString() !== userId.toString()
    );

    const transformedConversation = {
      _id: conversation._id,
      participant: otherParticipant,
      lastMessage: null,
      updatedAt: conversation.updatedAt,
      unreadCount: 0
    };

    res.status(201).json({
      success: true,
      conversation: transformedConversation
    });
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating conversation',
      error: error.message
    });
  }
};