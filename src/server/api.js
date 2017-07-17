const express = require('express');
const router = express.Router();
const Card = require('./models/Card');

// Add a card
router.post('/add', (req, res) => {
  Card.create(req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => console.log(err));
});

// View a card
router.get('/card/:id', (req, res) => {
  Card.findOne({_id: req.params.id})
  .then((result) => {
    return res.send(result);
  })
  .catch((err) => console.log(err));
});

// Edit a card
router.put('/card/:id/edit', (req, res) => {
  Card.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(() => {
    Card.findOne({_id: req.params.id})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
});

// Receive 5 latest cards (for viewing) *** NOT USED ***
router.get('/latest', (req, res) => {
  Card.find().sort({created: -1}).limit(5)
  .then((result) => {
    return res.send(result);
  })
  .catch((err) => console.log(err));
});

// All cards
router.post('/all', (req, res) => {
  Card.find({author: req.body.author}).sort({created: -1})
  .then((results) => {
    console.log(results);
    return res.send(results);
  })
  .catch((err) => console.log(err));
});

module.exports = router;