'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 文档
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },
  routerGroup: {
    enable: true,
    package: 'egg-router-group',
  },
  // 校验
  validate: {
    enable: true,
    package: 'egg-validate',
  }
};