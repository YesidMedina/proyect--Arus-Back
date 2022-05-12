const express = require('express')
const notificationRoutes = express.Router()
const { notificationInfo, createNotification } = require('../../../interfaces/controllers/ServicesControllers')


notificationRoutes.get('/note', notificationInfo)
notificationRoutes.post('/note', createNotification)



module.exports = { notificationRoutes }