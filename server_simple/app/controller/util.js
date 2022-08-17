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

    /**
     * @summary 邮箱验证码
     * @description 发送邮件 获取登录邮箱验证码
     * @router get /util/sendcode
     * @request query string *email eg:1039445602@qq.com 邮箱
     * @response 200 baseResponse 发送成功
     */
    async sendcode(){
      const { ctx } = this;
      const email = ctx.query.email
      // 示例验证码，实际使用根据自己规则生成
      const code = Math.random().toString().slice(2, 6)
      console.log('邮箱' + email + '验证码:' + code)
      ctx.session.emailcode = code
      const subject = '获取邮箱验证码'
      const text = ''
      const html = `<h2>我的社区</h2><a href="https://kaikeba.com"><span>${code}</span></a>`
      const hasSend = await this.service.tools.sendMail(email, subject, text, html)
      if (hasSend) {
        ctx.helper.message({ ctx, msg:'发送成功' })
      } else {
        ctx.helper.error({ ctx, msg:'发送失败' })
      }
    }
  }

  module.exports = UtilController