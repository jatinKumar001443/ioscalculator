const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: Date
});

module.exports = mongoose.model('Expense', ExpenseSchema);
