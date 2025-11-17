// backend/models/JournalEntry.js
const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  emotionTags: [String]
}, { timestamps: true });

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);