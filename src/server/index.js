const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 8000;
const setGlobalScope = (scope) => {
  global[scope] = {};
};

setGlobalScope('window');
const route = require('./route');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../..','public')));
}

app.use('/', route);

app.listen(port, error => {
  error
    ? console.error(error)
    : console.info(`🌎  ==> "http://localhost:${port}"`);
});
