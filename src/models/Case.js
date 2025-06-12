import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({
  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report',
    required: true
  },
  reviewer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  case_manager_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'resolved', 'closed', 'escalated'],
    default: 'pending'
  },
  classification: {
    type: String,
    enum: ['small_profile', 'complex'],
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  fir_number: {
    type: String,
    unique: true,
    sparse: true
  },
  comments: String,
  recommendations: String,
  extra_data: {
    type: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

// Update the updated_at field before saving
caseSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const Case = mongoose.model('Case', caseSchema);

export default Case; 