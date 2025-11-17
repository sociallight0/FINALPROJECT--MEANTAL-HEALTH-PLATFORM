// backend/models/MoodEntry.js
const mongoose = require('mongoose');

const MoodEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mood: {
    type: String,
    enum: ['happy', 'calm', 'okay', 'sad', 'anxious'],
    required: true
  },
  note: String
}, { timestamps: true });

module.exports = mongoose.model('MoodEntry', MoodEntrySchema);