require('express-async-errors');
const express = require('express');
const proxies = require('./middlewares/proxy');

const cors = require('./middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors);
app.use(proxies);

app.listen(3001);
