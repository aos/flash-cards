const express = require('express');
const router = express.Router();
const Card = require('./models/Card');

// Add a card
router.post('/add', (req, res) => {
  Card.create(req.body)
  .then((data) => {
    res.json({response: 'Saved!'});
  })
})

module.exports = router;