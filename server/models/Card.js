const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: 'You must supply a username!',
  },
  back: {
    type: String,
    required: 'Back of card is required!'
  },
  created: {
    type: Date,
    default: Date.now
  },
  viewed: {
    type: Number,
    default: 0
  },
  tags: {
    type: [String]
  }
})

module.exports = mongoose.model('Card', CardSchema);