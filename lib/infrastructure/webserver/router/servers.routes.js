const express = require('express')
const serverRoutes = express.Router()
const { serverInfo, alterServer, createServerInfo, deleteServerInfo,} = require('../../../interfaces/controllers/ServicesControllers')


serverRoutes.put('/servers/alter-server', alterServer)
serverRoutes.get('/servers', serverInfo)
serverRoutes.post('/servers', createServerInfo)

// serverRoutes.delete('/servers', deleteServerInfo)



module.exports = { serverRoutes }
