/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659499217211_7570';

  // add your middleware config here
  // 添加异常处理中间件
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // swaggerdoc 配置
  config.swaggerdoc = {
    dirScanner: './app/controller', //扫描文件夹地址
    apiInfo: { //swaggerdoc 标题
      title: '接⼝文档',
      description: '项目接⼝ swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true, 
    routerMap: true, // 自动产生路由映射
    enable: true,
  }

  return {
    ...config,
    ...userConfig,
  };
};
