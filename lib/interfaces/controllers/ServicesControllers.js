const {
  ServerInfo,
  CreateServerInfo,
  ComponentInfo,
  ComponentCreateInfo,
  NotificationInfo,
  CreateNotification,
  UserInfo,
  UserCreate,
  AlterServer,
} = require('../../application/use_cases')

module.exports = {
  async serverInfo(req, res, next) {
    try {
      const resp = await ServerInfo()
      next(resp)

      res.status(200).json(resp)
    } catch (error) {
      next(error)
    }
  },

  async createServerInfo(req, res, next) {
    try {
      const server = req.body
      const resp = await CreateServerInfo(server)
      next(resp)

      res.json({ msg: 'servidor creado correctamente' })
    } catch (error) {
      next(error)
    }
  },

  async alterServer(req, res, next) {
    try {
      const {client} = req.query
      const resp = await AlterServer(client)
      next(resp)
      res.json(resp)
    } catch {
      next(error)
    }
  },

  async componentInfo(req, res, next) {
    try {
      next(await ComponentInfo())

      res.json({ msg: 'Usuario creado correctamente' })
    } catch (error) {
      next(error)
    }
  },

  async componentCreateInfo(req, res, next) {
    try {
      const component = req.body
      const resp = await ComponentCreateInfo(component)
      next(resp)

      res.json({ msg: 'Componente agregado correctamente' })
      if (ComponentInfo) {
        return res.status(400).json({ msg: 'El componente ya existe' })
      }
    } catch (error) {
      next(error)
    }
  },

  async notificationInfo(req, res, next) {
    try {
      next(await NotificationInfo())

      res.json({ msg: 'Nota creada correctamente' })
    } catch (error) {
      next(error)
    }
  },

  async createNotification(req, res, next) {
    try {
      const notification = req.body
      await CreateNotification(notification)

      res.json({ msg: 'Nota creada correctamente' })
    } catch (error) {
      next(error)
    }
  },
  async userInfo(req, res, next) {
    try {
      const resp = await UserInfo()
      next(resp)

      res.json(resp)
    } catch (error) {
      next(error)
    }
  },

  async userCreate(req, res, next) {
    try {
      const user = req.body
      const resp = await UserCreate(user)
      next(resp)

      res.json({ msg: 'Usuario creado correctamente' })
    } catch (error) {
      next(res.status(400).json({ msg: 'El componente ya existe' }))
    }
  },
}
