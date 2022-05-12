const express = require('express')
const userRoutes = express.Router()
const { userInfo, userCreate} = require('../../../interfaces/controllers/ServicesControllers')


userRoutes.get('/us', userInfo)
userRoutes.post('/us', userCreate)



module.exports = { userRoutes }
