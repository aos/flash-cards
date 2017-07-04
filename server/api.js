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

// View a card
router.get('/card/:id', (req, res) => {
  Card.findOne({_id: req.params.id}, 
    (err, result) => {
      if (err) return console.log(err);
      return res.send(result);
  })
})

// All cards
router.get('/all', (req, res) => {
  Card.find((err, results) => {
    if (err) return console.log(err);
    return res.send(results);
  });
});

module.exports = router;