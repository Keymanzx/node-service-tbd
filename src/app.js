// app.js
const express = require('express');
const app = express();

// Import routes
const mainRoutes = require('./routes/mainRoutes');

const Prefix = '/api';

// Connect DB
const { connect, getClient } = require('./connection/connect'); // Adjust the path based on your project structure

// Connect to MongoDB
connect();

// Use routes
app.use(Prefix, mainRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}${Prefix}`);
});
