// app/contract/userAccess.js
module.exports = {
    loginRequest: {
    //   mobile: { type: 'string', required: true, description: '手机号', example: '18801731528', format: /^1[34578]\d{9}$/, },
        email: {
            type:"string", 
            required: true,
            description: '邮箱',
            example: '1039445602@qq.com'
        },
        captcha: {
            type:"string", 
            required: true,
            description: '验证码',
            example: 'maf6'
        },
        password: {
            type:"string", 
            required: true,
            description: '密码',
            example: '123456',
            format: /^[\w_-]{6,12}$/
        }
    },
  }