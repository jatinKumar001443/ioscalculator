const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const expenseRoutes = require('./routes/expenses');
const investmentRoutes = require('./routes/investments');
const balanceSheetRoutes = require('./routes/balanceSheet');
const profitLossRoutes = require('./routes/profitLoss');
const aiRoutes = require('./routes/ai');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/finance-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/expenses', expenseRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/balance-sheet', balanceSheetRoutes);
app.use('/api/profit-loss', profitLossRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
