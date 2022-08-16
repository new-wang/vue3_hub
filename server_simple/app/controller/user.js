const Controller = require('egg').Controller;

/**
 * @Controller user
 */

class UserController extends Controller {

  /**
   * @summary 获取所有用户(分页/模糊)
   * @description 获取用户信息
   * @router get /api/user
   * @request query integer *currentPage eg:1 当前页
   * @request query integer *pageSize eg:10 单页数量
   * @request query string search eg: 搜索字符串
   * @request query boolean isPaging eg:true 是否需要翻页
   * @response 200 baseResponse 创建成功
   */
  async index() {
    const { ctx, service } = this
    // 组装参数
    const payload = ctx.query
    // 调用 Service 进行业务处理
    const res = await service.user.index(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res })
  }

  /**
   * @summary 创建用户
   * @description 创建用户 记录用户账户、密码、类型
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this;
    // ctx.validate(ctx.rule.createUserRequest)
    // let errs = app.validator.validate({ userName: 'string' }, ctx.request.body);
    const res = {
        abc:123
    }
        
    // 统一应答 - 成功响应
    ctx.helper.success({ ctx, res })
  }


  // async index() {
  //   const { ctx } = this;
  //   const res = {
  //     token:"1545"
  //   }
  //   ctx.helper.success({ ctx, res});
  //   // ctx.body = 'hi, user';
  // }

  // async register() {
  //   const { ctx } = this
  //   // const { email, passwd, captcha, nickname } = ctx.request.body

  //   ctx.body = 'hi, register';

  // }

  // async login() {
  //   const { ctx } = this
  //   // const { email, passwd, captcha, nickname } = ctx.request.body
  //   ctx.body = 'hi, login';
  // }
}

module.exports = UserController;