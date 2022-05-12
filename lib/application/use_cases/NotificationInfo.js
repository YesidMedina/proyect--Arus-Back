const Notification = require('../../interfaces/storage/Notification')
const NotificationRepository = require('../../domain/repository/NotificationRepository')
const notificationRepository = new NotificationRepository(new Notification())

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = notificationRepository.notificationInfo()
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
