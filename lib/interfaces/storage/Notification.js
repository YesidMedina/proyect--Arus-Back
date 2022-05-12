const notificationSchema = require('../../infrastructure/models/Notifications')

module.exports = class {
  constructor() {
    this.model = notificationSchema
  }

  async notificationInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const notifications = await this.model.find({})
        console.log(notifications)
        resolve(notifications)
      } catch (error) {
        reject(error)
      }
    })
  }

  async createNotification(notification) {
    return new Promise(async (resolve, reject) => {
      try {
        const notifications = await this.model.create(notification)
        console.log(notifications)
        resolve(notifications)
      } catch (error) {
        reject(error)
      }
    })
  }
}
