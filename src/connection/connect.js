// db.js

const { MongoClient } = require('mongodb');

// Connection URI (replace <username>, <password>, and <dbname> with your credentials)
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/'

console.log("uri :", uri);

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

function getClient() {
  // Return the MongoDB client
  return client;
}

module.exports = { connect, getClient };
