const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({ methods: ["GET", "POST", "PUT"] }));

const { router } = require('./router/index.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

module.exports = { app }
