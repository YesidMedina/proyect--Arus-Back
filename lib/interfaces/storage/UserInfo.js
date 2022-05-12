const userSchema = require('../../infrastructure/models/Users')

module.exports = class {
  constructor() {
    this.model = userSchema
  }

  async userInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const us = await this.model.find({})
        console.log(us)
        resolve(us)
      } catch (error) {
        reject(error)
      }
    })
  }

  async userCreate(user) {
    console.log(user)
    return new Promise(async (resolve, reject) => {
      try {
        
        const res = await this.model.create(user)
        console.log(res)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  }
}
