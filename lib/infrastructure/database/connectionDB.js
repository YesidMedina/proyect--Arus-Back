const mongoose = require('mongoose')

const connectionDB = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then((app) => console.log('Conexion exitosa'))
  } catch (error) {
    console.log('Error del servidor')
    console.log(error)
    process.exit(1)
  }
}

module.exports = { connectionDB }
