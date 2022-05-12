const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {connectionDB} = require('../database/connectionDB')
connectionDB()

const notificationSchema = new Schema({
  note: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

 
 
})

module.exports = mongoose.model('Notifications', notificationSchema)