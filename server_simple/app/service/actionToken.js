const { Service } = require('egg')
const jwt = require('jsonwebtoken')

class ActionTokenService extends Service {
    // 签名：生成一个token
    // 因为注册了jwt 插件(egg-jwt) 会把jwt 绑定到app 
    // 所以app.jwt.sign可以拿到
    // ctx.app.config.jwt.secret 秘钥
    // async apply(_id) {
    //     const { ctx } = this
    //     return ctx.app.jwt.sign({
    //         data: {
    //             _id: _id
    //         },
    //         exp: Math.floor(Date.now() / 1000 + (60 * 60 * 7))//过期时间 7天
    //     }, ctx.app.config.jwt.secret)
    // }

    async apply(id,email) {
        const { app } = this
        return jwt.sign({
            id,
            email
        }, app.config.jwt.secret,{
            expiresIn: '2h',
        })
    }

}
module.exports = ActionTokenService