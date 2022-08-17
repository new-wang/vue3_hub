const { Service } = require('egg')
const nodemailer = require('nodemailer')

const userEmail = '1569566735@qq.com'
const transporter = nodemailer.createTransport({
    service: 'QQ',
    secureConnection: true,
    auth: {
      user: userEmail,
      pass: 'cqnwlgjdgwqdhcaj',
    },
  })

class ToolService extends Service {
    async sendMail(email, subject, text, html) {
        const mailOptions = {
          from: userEmail,
          cc: userEmail,
          to: email,
          subject,
          text,
          html,
        }
        try {
          await transporter.sendMail(mailOptions)
          return true
        } catch (err) {
          console.log('email error', err)
          return false
        }
      }
}

module.exports = ToolService