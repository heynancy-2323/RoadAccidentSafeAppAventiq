import mongoose from 'mongoose';

const configurationSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  updated_by_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Create index for faster key lookups
configurationSchema.index({ key: 1 });

const Configuration = mongoose.model('Configuration', configurationSchema);

export default Configuration; 