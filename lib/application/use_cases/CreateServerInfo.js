const ServerInfo = require('../../interfaces/storage/ServerInfo')
const ServerRepository = require('../../domain/repository/ServerRepository')
const serverRepository = new ServerRepository(new ServerInfo())

module.exports = (server) => {
  console.log(server)
  return new Promise(async (resolve, reject) => {
    try {
      const res = await serverRepository.createServerInfo(server)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
