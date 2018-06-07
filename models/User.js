const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    rquired: true
  },
  email: {
    type: String,
    rquired: true
  },
  password: {
    type: String,
    rquired: true
  },
  avatar: {
    type: String,
    rquired: true
  },
  data: {
    type: Date,
    rquired: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
