const express = require('express')
const router = express.Router()
const {serverRoutes} = require('./servers.routes')
const {componentRoutes} = require('./components.routes')
const {notificationRoutes} = require('./notification.routes')
const {userRoutes} = require('./user.routes')



router.use('/api/serve', serverRoutes)
router.use('/api/component', componentRoutes)
router.use('/api/notification', notificationRoutes)
router.use('/api/user', userRoutes)



module.exports = { router }
