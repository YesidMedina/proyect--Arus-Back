const express = require('express')
const componentRoutes = express.Router()
const { componentInfo, componentCreateInfo } = require('../../../interfaces/controllers/ServicesControllers')


componentRoutes.get('/components', componentInfo)
componentRoutes.post('/components', componentCreateInfo)



module.exports = { componentRoutes }
