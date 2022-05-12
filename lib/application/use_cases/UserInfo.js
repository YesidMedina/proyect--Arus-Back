const UserInfo = require('../../interfaces/storage/UserInfo')
const UserRepository = require('../../domain/repository/UserRepository')
const userRepository = new UserRepository(new UserInfo())

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = userRepository.userInfo()
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
