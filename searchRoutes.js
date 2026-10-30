const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

router.get('/api/search', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { category } = req.query;
    let query = {};
    if (category) {
      query.category = category;
    }
    const gifts = await db.collection('gifts').find(query).toArray();
    res.status(200).json(gifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
