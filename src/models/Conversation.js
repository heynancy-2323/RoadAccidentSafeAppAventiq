import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  unreadCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Ensure participants array has exactly 2 unique users
conversationSchema.pre('save', function(next) {
  if (this.participants.length !== 2) {
    next(new Error('Conversation must have exactly 2 participants'));
  }
  
  // Check for duplicate participants
  const uniqueParticipants = new Set(this.participants.map(p => p.toString()));
  if (uniqueParticipants.size !== 2) {
    next(new Error('Conversation participants must be unique'));
  }
  
  next();
});

// Create compound index for faster queries
conversationSchema.index({ participants: 1 });

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation; 