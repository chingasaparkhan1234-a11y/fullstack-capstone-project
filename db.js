const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = 'giftdb';
let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) return dbInstance;
  const client = new MongoClient(url);
  await client.connect();
  dbInstance = client.db(dbName);
  console.log('Connected to MongoDB');
  return dbInstance;
}

module.exports = { connectToDatabase };
