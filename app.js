var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var util = require('util');

var app = express();
app.use(require('express-domain-middleware'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configure = require('./configure')

config = configure.app()
$arr = {
  config : config
};


var index = require('./routes/index');

app.use('/',index);
app.use('/index',index);

module.exports = app;
var server = http.createServer(app);

server.listen(5000);