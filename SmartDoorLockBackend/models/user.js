// models/User.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const user = mongoose.model('user', userSchema);

module.exports = user;
