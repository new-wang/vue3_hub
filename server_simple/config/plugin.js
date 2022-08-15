'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  routerGroup: {
    enable: true,
    package: 'egg-router-group',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  }
};