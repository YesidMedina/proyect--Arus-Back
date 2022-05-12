module.exports = class {
  constructor(repository) {
    this.repository = repository
  }

  componentInfo() {
    return this.repository.componentInfo()
  }

  componentCreateInfo(component) {
    return this.repository.componentCreateInfo(component)
  }
}
