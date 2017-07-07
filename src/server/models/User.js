const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'You must supply a username!',
    trim: true
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
})

UserSchema.pre('save', function(next) {
  const user = this;

  // Only hash password if it has been modified
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // Hash password using new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      
      // Override cleartext password with hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);