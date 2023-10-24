var bodyParser = require('body-parser');
var express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger')
const globalErrorHandler = require('./middleware/globalErrorHandler')

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger);

app.use('/', require('./routes/routes'));

app.use(globalErrorHandler);

module.exports = app;