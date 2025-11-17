// backend/routes/journal.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const JournalEntry = require('../models/JournalEntry');

// Create entry
router.post('/', auth, async (req, res) => {
  try {
    const entry = new JournalEntry({
      user: req.user.id,
      content: req.body.content,
      emotionTags: req.body.emotionTags || []
    });
    await entry.save();
    res.json(entry);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;