const  componentSchema  = require('../../infrastructure/models/Components')

module.exports = class {
  constructor() {
    this.model = componentSchema
  }

  async componentInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const components = await this.model.find({})
        console.log(components);
        resolve(components)
      } catch (error) {
        reject(error)
      }
    })
  }

  async componentCreateInfo(component) {
    return new Promise(async (resolve, reject) => {
      try {
        const components = await this.model.create(component)
        console.log(components);
        resolve(components)
      } catch (error) {
        reject(error)
      }
    })
  }
}

