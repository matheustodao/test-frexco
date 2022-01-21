const { createProxyMiddleware } = require('http-proxy-middleware');

const configProxy = {
  target: 'https://www.fruityvice.com/',
  changeOrigin: true,
};

const fruitsProxy = createProxyMiddleware(configProxy);

module.exports = fruitsProxy;
