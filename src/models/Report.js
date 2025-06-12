import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  license_number: {
    type: String,
    required: true
  },
  vehicle_number: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  }
});

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  registration_number: {
    type: String,
    required: true
  },
  damage_description: {
    type: String
  }
});

const insuranceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  policy_number: {
    type: String,
    required: true
  }
});

const reportSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['public', 'field_officer'],
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  submitted_by_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  submitted_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  parent_report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report'
  },
  contact_info: {
    phone: String,
    email: String
  },
  injuries: {
    type: Number,
    default: 0
  },
  deaths: {
    type: Number,
    default: 0
  },
  driver_details: [driverSchema],
  vehicles: [vehicleSchema],
  road_conditions: String,
  weather: String,
  infrastructure_damage: String,
  insurance_info: [insuranceSchema],
  extra_data: {
    type: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

// Create geospatial index for location queries
reportSchema.index({ location: '2dsphere' });

const Report = mongoose.model('Report', reportSchema);

export default Report; 