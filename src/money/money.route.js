const express = require('express');
const { getAllTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction } = require('./money.controller');
const router = express.Router();

// Get all transactions
router.get('/', getAllTransactions);

// Get a single transaction by ID
router.get('/:id', getTransactionById);

// Create a new transaction
router.post('/', createTransaction);

// Update an existing transaction by ID
router.put('/:id', updateTransaction);

// Delete an existing transaction by ID
router.delete('/:id', deleteTransaction);

module.exports = router;