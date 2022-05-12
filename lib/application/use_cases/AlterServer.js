const ServerInfo = require('../../interfaces/storage/ServerInfo')
const ServerRepository = require('../../domain/repository/ServerRepository')
const serverRepository = new ServerRepository(new ServerInfo())
const {send} = require('../../infrastructure/clientApis/nodemailer')


module.exports = (client) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allServers = await serverRepository.serverInfo()

      const existServer = allServers.find((data) => data.client === client)
      console.log(existServer)

      const resp = await serverRepository.alterServer(existServer)
      await send()

      resolve(resp)
    } catch (error) {
      reject(error)
    }
  })
}
