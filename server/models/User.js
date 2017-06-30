const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'You must supply a username!',
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
})

module.exports = mongoose.model('User', UserSchema);