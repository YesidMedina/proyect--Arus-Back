const UserInfo = require('../../interfaces/storage/UserInfo')
const UserRepository = require('../../domain/repository/UserRepository')
const userRepository = new UserRepository(new UserInfo())

module.exports = (user) => {
    console.log(user, 'caso de uso');
  return new Promise(async (resolve, reject) => {
    try {
      const res = await userRepository.userCreate(user)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
