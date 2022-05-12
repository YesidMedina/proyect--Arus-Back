require('dotenv').config()
const { app } = require('./lib/infrastructure/webserver/server')

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
