'use strict';

// const yaml = require('js-yaml');
// const fs = require('fs');

// // Get document, or throw exception on error
// try {
//   const alanineConfig = yaml.safeLoad(fs.readFileSync('__config.yml', 'utf8'));
//   console.log(alanineConfig);
// } catch (e) {
//   console.log(e);
// }

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530768240090_6131';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/alanine',
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.passportLocal = {
    usernameField: 'email',
  };

  return config;
};
