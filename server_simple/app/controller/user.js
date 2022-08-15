const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
      const { ctx } = this;
      ctx.body = 'hi, user';
    }

    async register() {
      const { ctx } = this
      // const { email, passwd, captcha, nickname } = ctx.request.body
  
      ctx.body = 'hi, register';
  
    }

    async login() {
      const { ctx } = this
      // const { email, passwd, captcha, nickname } = ctx.request.body
      ctx.body = 'hi, login';
    }
  }
  
  module.exports = UserController;