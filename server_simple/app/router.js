'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 注意 swaggerdoc 的配置 routerMap 为true 允许自动生成API路由，设置为false需要自己来写路由
  // router.get('/util/captcha', controller.util.captcha)
  // router.group({ name: 'user', prefix: '/user'}, router => {
  //   const {
  //     register,
  //     login
  //   } = controller.user

  //   router.post('/register', register)
  //   router.post('/login', login)
  // })

};
