const svgCaptcha = require('svg-captcha')
const { Controller } = require('egg')

/**
 * @Controller 工具接口 
 * //注意此处 @Controller { ControllerName }  不写 ControllerName 会以文件名作为 ControllerName
 */

class UtilController extends Controller {
    /**
     * @summary 图形验证码
     * @description 获取登录 图形验证码
     * @router get /util/captcha
     */
    async captcha() {
      const { ctx } = this;
      const captcha = svgCaptcha.create({
        size: 4,
        fontSize: 50,
        width: 100,
        height: 40,
        noise: 3,
      })
      console.log('captcha :>> ', captcha.text);
      ctx.session.captcha = captcha.text
      ctx.response.type = 'image/svg+xml'
      ctx.body = captcha.data
    }

  }

  module.exports = UtilController