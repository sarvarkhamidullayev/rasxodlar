const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRouter = require('./src/money/money.route');
const app = express();

// Set up middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all requests

// Connect to MongoDB
mongoose.set('strictQuery', false);
const MONGODB_URI = 'mongodb+srv://Coder:Coder@cluster0.u1jkl64.mongodb.net/rasxodlar?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define routes
app.use('/transactions', transactionRouter);

// Set up error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});