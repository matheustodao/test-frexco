require('dotenv').config();
require('express-async-errors');
const express = require('express');
const proxies = require('./middlewares/proxy');

const cors = require('./middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors);
app.use(proxies);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`running ${port}`));
