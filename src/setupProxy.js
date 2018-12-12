const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/bingApi', {
    target: 'https://cn.bing.com/',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      "^/bingApi": ""
    }
  }));
};