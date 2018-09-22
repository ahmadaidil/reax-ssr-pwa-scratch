const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8001;
const setGlobalScope = (scope) => {
  global[scope] = {};
};

setGlobalScope('window');
const route = require('./route');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', route);

app.listen(port, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎 listening on port ${port}.`);
});
