const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Review sub-schema
const reviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});

// Main Trainer schema
const trainerSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['trainer', 'coach', 'advisor'] }, // Optional enum
  name: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  profilePhoto: { type: String, default: '' },
  speciality: {
    type: [String],
    default: [],
  },
  aboutMe: { type: String, default: '' },
  certifications: {
    type: [String],
    validate: [arr => arr.length <= 4, 'Maximum 4 certification links allowed'],
    default: [],
  },
  packages: {
    monthly: { type: Number, required: true, min: 0 },
    quarterly: { type: Number, required: true, min: 0 },
    halfYearly: { type: Number, required: true, min: 0 },
    yearly: { type: Number, required: true, min: 0 },
  },
  reviews: {
    type: [reviewSchema],
    default: [],
  },
  averageRating: {
    type: Number,
    default: null,
    min: 1,
    max: 5,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Hash password before saving
trainerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
trainerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Trainer', trainerSchema);
