const { Service } = require('egg')
const md5 = require('md5')

const HashSalt = ':wx@good!@123'

class UserAccessService extends Service {
    async login(payload) {
        const { ctx, service } = this
        const { email, captcha, password, emailcode } = payload
        if (captcha.toUpperCase() !== ctx.session.captcha.toUpperCase()) {
            ctx.throw(422,'验证码错误！')
        }

        if (emailcode !== ctx.session.emailcode) {
            ctx.throw(422,'邮箱验证码错误！')
        }

        // 检索用户
        // const user = await ctx.model.User.findOne({
        //     where: {
        //       email,
        //       password
        //     }
        // })
        // if (!user) {
        //     // 异常处理中间件会捕获
        //     ctx.throw(404, '用户名密码错误！')
        // }else{
        //     console.log('user :>> ', user);
        // }
        const user = await service.user.checkEmail(email)
        if (!user) {
            ctx.throw(404, 'user not found')
        }
        
        // ui pass hash(明文)  === 数据库中是 pass hash
        // 不需要我们手写 ，  egg-bcrypt 库 提供了一个compare 来实现
        // let verifyPsw = await ctx.compare(password, user.password)
        // if (!verifyPsw) {
        //     ctx.throw(404, 'user password is error')
        // }
        if( md5(password + HashSalt) !== user.password ){
            ctx.throw(404, 'user password is error')
        }
        
        // 生成Token令牌
        return { 
            token: await service.actionToken.apply(user.id,user.email),
            email, 
            nickname: user.nickname 
        }
    }

    async logout() {
    }
}

module.exports = UserAccessService