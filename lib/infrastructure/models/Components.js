const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {connectionDB} = require('../database/connectionDB')
connectionDB()

const componentSchema = new Schema({
  addComponents: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },

  capacity: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  alert: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
 
})

module.exports = mongoose.model('Components', componentSchema)
