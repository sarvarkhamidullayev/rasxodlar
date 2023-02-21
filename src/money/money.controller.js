const moment = require("moment");
const { Money } = require("./money.model");
// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Money.find();
    res.status(200).json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single transaction by ID
const getTransactionById = async (req, res) => {
  const id = req.params.id;
  try {
    const transaction = await Money.findById(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  const { amount, description, date, isInput } = req.body;
  try {
    const currdate = moment().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    const newTransaction = new Money({
      amount,
      description,
      date: currdate,
      isInput
    });
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing transaction by ID
const updateTransaction = async (req, res) => {
  const id = req.params.id;
  const { amount, description, date, isInput } = req.body;
  try {
    const updatedTransaction = await Money.findByIdAndUpdate(id, {
      amount,
      description,
      date,
      isInput
    }, { new: true });
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(updatedTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an existing transaction by ID
const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTransaction = await Money.findByIdAndDelete(id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
};