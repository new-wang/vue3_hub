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
    sequelize: {
      dialect: "mysql",
      host: "47.98.176.161",
      port: 3306,
      username: "root",
      password: "example",
      database: "test", //数据库名
      // 配置数据库时间为东八区北京时间
      timezone:'+08:00',
      // dialectOptions:{
      //   //​ 每次查询datetime的字段，显示出来都是这种格式​2022-02-13T01:34:05.000Z
      //   dateStrings:true,
      //   typeCast:true
      // },
      define:{
        freezeTableName:true, // 强制表名称等于模型名称
        timestamps:false //禁用模型的时间戳
      }
    }
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
    consumes: ['application/json'],// 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: ['application/json','image/svg+xml'],
    enableSecurity: false,
    // enableValidate: true, 
    routerMap: true, // 允许自动生成API路由
    enable: true,
  }

  return {
    ...config,
    ...userConfig,
  };
};
