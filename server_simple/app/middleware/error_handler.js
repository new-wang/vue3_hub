// 统一异常处理中间件
// 中间件工厂
// return一个中间件
module.exports = (option,app) => {
    return async function(ctx,next){
        try {
            // 业务逻辑
            await next()
        } catch (err) {
            // 异常处理
            // 上抛
            app.emit('error',err,this)

            // 统一异常应答
            const status = err.status || 500
            // 区分
            // 生产环境 app.config.env === 'prod'
            // 开发环境
            const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error!!!' : err.message

            ctx.body = {
                code:status,// 服务端自身的处理逻辑错误(包含框架错误500 及 自定义业务逻辑错误533开始 ) 客户端请求参数导致的错误(4xx开始)，设置不同的状态码
                error:error
            }
            if(status === 422){
                // 422 通常用户的输入信息有错误
                // 用户出错的具体信息返回给他
                ctx.body.detail = err.errors
            }

            // http请求的返回码都是200
            // 真正错误是根据应答信息的返回码来确定
            ctx.status = 200
        }
    }
}