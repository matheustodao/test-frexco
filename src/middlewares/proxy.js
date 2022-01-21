const express = require('express');
const proxies = express();
const fruitsProxy = require('./proxies/fruitsProxy');

proxies.use('/api', fruitsProxy);

module.exports = proxies;
