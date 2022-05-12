const serverSchema = require('../../infrastructure/models/Servers')

module.exports = class {
  constructor() {
    this.model = serverSchema
  }

  async serverInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const ser = await this.model.find({})
        resolve(ser)
      } catch (error) {
        reject(error)
      }
    })
  }

  async createServerInfo(server) {
    console.log(server)
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.model.create(server)

        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  }

  async alterServer(server) {
    return new Promise(async (resolve, reject) => {
      try {
        const filter = { nameServer: server.nameServer }

        const updateDoc = {
          ip: server.ip,
          client: server.client,
          nameServer: server.nameServer,
          disk: {
            capacity: server.disk.capacity,
            performans: 90,
          },
          memory: {
            capacity: server.memory.capacity,
            performans: 90,
          },
          cpu: {
            capacity: server.cpu.capacity,
            performans: 90,
          },
        }

        const res = await this.model.updateOne(filter, updateDoc)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  }

}
