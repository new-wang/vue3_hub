module.exports = {
    createUserRequest: {
        mobile: { type: 'string', required: true, description: '⼿机号', example: '18801731528', format: /^1[34578]\d{9}$/, },
        password: { type: 'string', required: true, description: '密码', example: '111111', },
        realName: { type: 'string', required: true, description: '姓名', example: 'Tom' },
    },
    registerUserRequest: {
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
        nickname: {
            type:"string", 
            required: true,
            description: '昵称',
            example: '老6啊'
        },
        passwd: {
            type:"string", 
            required: true,
            description: '密码',
            example: '123456',
            format: /^[\w_-]{6,12}$/
        }
    }
}