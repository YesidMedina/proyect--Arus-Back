const nodemailer = require('nodemailer')

const send = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pruebas.medina0211@gmail.com',
        pass: 'duiqserlbnnartje',
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
    const mail = {
      from: 'pruebas.medina0211@gmail.com',
      to: ['pruebas.medina0211@gmail.com'],
      subject: 'Alerta de servidor con alto consumo',
      html: `Warning!
algunos de nuestros servidores están saturados<br>. Ingresa a la pagina: <a href="http://localhost:3000/support" target="_blank">soporte</a> para optimizar`,
    }
    const { messageId } = await transporter.sendMail(mail)
    return messageId
  } catch (e) {
    throw e
  }
}

module.exports = {
  send,
}
