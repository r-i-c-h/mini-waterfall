const express = require('express');
const routes = require('./routes/router');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser);
app.use(routes);
