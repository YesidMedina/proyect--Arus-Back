const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { connectionDB } = require('../database/connectionDB')
connectionDB()

const serverSchema = new Schema({
  ip: String,

  nameServer: String,
  client: String,

  disk: {
    capacity: String,
    performans: Number,
  },
  memory: {
    capacity: String,
    performans: Number,
  },
  cpu: {
    capacity: String,
    performans: Number,
  },
})

module.exports = mongoose.model('Servers', serverSchema)

