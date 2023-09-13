// src/setupProxy.js (or src/setupProxy.js)
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy requests to Authorize.Net
  app.use(
    '/api/authorize-net',
    createProxyMiddleware({
      target: 'https://api.authorize.net/xml/v1/request.api',
      changeOrigin: true,
    })
  );
};
