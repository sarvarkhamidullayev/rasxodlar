const mongoose = require('mongoose');

const MoneySchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isInput: {
    type: Boolean,
    required: true
  }
});
const Money = mongoose.model('Money', MoneySchema);

module.exports.Money = Money;
