require('env2')('.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));
app.disable('x-powered-by');

module.exports = app;
