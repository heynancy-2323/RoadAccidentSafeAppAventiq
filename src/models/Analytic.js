import mongoose from 'mongoose';

const timeRangeSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
});

const analyticSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['accident_frequency', 'hotspot', 'case_status', 'severity_trend', 'user_performance'],
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  time_range: {
    type: timeRangeSchema,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for faster queries
analyticSchema.index({ type: 1, 'time_range.start': -1, 'time_range.end': -1 });
analyticSchema.index({ created_at: -1 });

const Analytic = mongoose.model('Analytic', analyticSchema);

export default Analytic; 