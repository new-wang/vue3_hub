// controller/userAccess.js
'use strict'
const Controller = require('egg').Controller
/**
 * @Controller 用户鉴权
 */
class UserAccessController extends Controller {

  constructor(ctx) {
    super(ctx)
  }

  /**
   * @summary 用户登入
   * @description 用户登入
   * @router post /asscess/login
   * @request body loginRequest *body
   * @response 200 baseResponse 创建成功
   */
  async login() {
    const { ctx, service } = this
    ctx.validate(ctx.rule.loginRequest);
    const payload = ctx.request.body || {}
    // const { email, captcha, passwd, emailcode } = payload
    // if (captcha.toUpperCase() !== ctx.session.captcha.toUpperCase()) {
    //   ctx.helper.error({ ctx, msg:'验证码错误！' })
    // }
    const res = await service.userAccess.login(payload)
    ctx.helper.success({ ctx, res })
  }

}

module.exports = UserAccessController