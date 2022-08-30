const { Service } = require('egg')
const md5 = require('md5')

const HashSalt = ':wx@good!@123'

class UserService extends Service {
  async register(payload) {
    const { ctx } = this
    const { email, password, captcha, nickname } = payload
    if (captcha.toUpperCase() !== ctx.session.captcha.toUpperCase()) {
      ctx.throw(422, '验证码错误')
    }
    // 检索用户
    const user = await this.checkEmail(email)
    if (user) {
      ctx.throw(422, '邮箱重复啦')
    } else {
      const res = await ctx.model.User.create({
        email,
        nickname,
        password: md5(password + HashSalt),
        // password: ctx.genHash(password)
      })
      if (res.id) {
        return res
      }
    }
  }

  /**
   ** @param {*} email 
   */
  async checkEmail(email) {
    const user = await this.ctx.model.User.findOne({
      where: {
        email: email
      }
    })
    return user
  }
}

module.exports = UserService