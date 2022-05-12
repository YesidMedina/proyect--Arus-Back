module.exports = class {
    constructor(repository) {
      this.repository = repository
    }
  
    userInfo() {
      return this.repository.userInfo()
    }
  
    userCreate(user) {
      return this.repository.userCreate(user)
    }
  
  }
  