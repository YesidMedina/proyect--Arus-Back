const ComponentInfo = require('../../interfaces/storage/ComponentInfo')
const ComponentRepository = require('../../domain/repository/ComponentRepository')
const componentRepository = new ComponentRepository(new ComponentInfo())

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = componentRepository.componentCreateInfo()
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
