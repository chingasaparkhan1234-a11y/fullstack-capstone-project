const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

router.get('/api/gifts', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gifts = await db.collection('gifts').find({}).toArray();
    res.status(200).json(gifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/api/gifts/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const id = parseInt(req.params.id) || req.params.id;
    const gift = await db.collection('gifts').findOne({ $or: [{ id: id }, { _id: id }] });
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json(gift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
