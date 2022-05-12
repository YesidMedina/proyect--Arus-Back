module.exports = class {
  constructor(repository) {
    this.repository = repository
  }

  serverInfo() {
    return this.repository.serverInfo()
  }

  createServerInfo(server) {
    return this.repository.createServerInfo(server)
  }

  alterServer(server) {
    return this.repository.alterServer(server)
  }
}
