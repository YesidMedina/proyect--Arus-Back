module.exports = class {
    constructor(repository) {
      this.repository = repository
    }
  
    notificationInfo() {
      return this.repository.notificationInfo()
    }
  
    createNotification(notification) {
      return this.repository.createNotification(notification)
    }
  
  }
  