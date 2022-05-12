const Notification = require('../../interfaces/storage/Notification')
const NotificationRepository = require('../../domain/repository/NotificationRepository')
const notificationRepository = new NotificationRepository(new Notification())

module.exports = (notification) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = notificationRepository.createNotification(notification)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
