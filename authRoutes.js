const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

router.post('/api/auth/login', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { email } = req.body;
    const user = await db.collection('users').findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Logged in successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
