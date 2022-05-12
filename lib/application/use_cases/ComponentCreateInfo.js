const ComponentInfo = require('../../interfaces/storage/ComponentInfo')
const ComponentRepository = require('../../domain/repository/ComponentRepository')
const componentRepository = new ComponentRepository(new ComponentInfo())
const sendEmail = require('../../infrastructure/clientApis/nodemailer')

module.exports = (component) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = componentRepository.componentCreateInfo(component)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
