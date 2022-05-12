const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { connectionDB } = require('../database/connectionDB')
connectionDB()

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  rol: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
})

module.exports = mongoose.model('Users', userSchema)
