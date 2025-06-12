import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  attachments: [{
    type: {
      type: String,
      enum: ['image', 'file', 'location'],
      required: true
    },
    url: {
      type: String,
      required: true
    },
    name: String,
    size: Number,
    mimeType: String
  }],
  readAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Create indexes for faster queries
messageSchema.index({ conversation: 1, createdAt: -1 });
messageSchema.index({ sender: 1 });
messageSchema.index({ readAt: 1 });

// Update conversation's lastMessage and unreadCount when a new message is created
messageSchema.post('save', async function() {
  const Conversation = mongoose.model('Conversation');
  
  // Update conversation's lastMessage
  await Conversation.findByIdAndUpdate(this.conversation, {
    lastMessage: this._id,
    $inc: { unreadCount: 1 } // Increment unread count for other participants
  });
});

const Message = mongoose.model('Message', messageSchema);

export default Message; 