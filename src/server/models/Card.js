const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: 'Front of card is required!',
  },
  back: {
    type: String,
    required: 'Back of card is required!'
  },
  code: {
    type: Boolean,
    default: false
  },
  known: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  viewed: {
    type: Number,
    default: 0
  },
  author: {
    type: String
  }
})

module.exports = mongoose.model('Card', CardSchema);