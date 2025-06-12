import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  recipient_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report'
  },
  case_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case'
  },
  type: {
    type: String,
    enum: ['sms', 'in_app', 'email'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  sent_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['sent', 'failed'],
    default: 'sent'
  }
}, {
  timestamps: true
});

// Create indexes for faster queries
notificationSchema.index({ recipient_user_id: 1, sent_at: -1 });
notificationSchema.index({ status: 1 });

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification; 