import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report',
    required: true
  },
  file_type: {
    type: String,
    enum: ['photo', 'video'],
    required: true
  },
  file_url: {
    type: String,
    required: true
  },
  uploaded_at: {
    type: Date,
    default: Date.now
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true
});

const Media = mongoose.model('Media', mediaSchema);

export default Media; 