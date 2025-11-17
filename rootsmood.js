// backend/routes/mood.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MoodEntry = require('../models/MoodEntry');

// Log mood
router.post('/', auth, async (req, res) => {
  try {
    const newMood = new MoodEntry({
      user: req.user.id,
      mood: req.body.mood,
      note: req.body.note
    });
    await newMood.save();
    res.json(newMood);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all moods
router.get('/', auth, async (req, res) => {
  try {
    const moods = await MoodEntry.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;