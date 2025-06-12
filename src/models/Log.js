import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  action_type: {
    type: String,
    enum: ['login', 'report_submission', 'case_validation', 'case_assignment', 'audit', 'config_change'],
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
  details: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for faster queries
logSchema.index({ user_id: 1, created_at: -1 });
logSchema.index({ action_type: 1, created_at: -1 });
logSchema.index({ report_id: 1, created_at: -1 });
logSchema.index({ case_id: 1, created_at: -1 });

const Log = mongoose.model('Log', logSchema);

export default Log; 