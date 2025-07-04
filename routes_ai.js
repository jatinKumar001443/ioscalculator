const express = require('express');
const router = express.Router();

router.post('/budget', (req, res) => {
  // here you’d integrate OpenAI or any other AI logic
  const { income, expenses } = req.body;
  const suggestedBudget = (income - expenses) * 0.5;
  res.json({
    message: "Here’s a suggested budget allocation.",
    suggestedBudget
  });
});

router.post('/suggestions', (req, res) => {
  const { userData } = req.body;
  // imagine sending userData to an AI model
  res.json({
    suggestions: [
      "Reduce eating out to save 10%",
      "Consider investing in mutual funds for better returns."
    ]
  });
});

module.exports = router;
