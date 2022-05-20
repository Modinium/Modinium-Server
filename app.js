var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

fs.readdir('./routes/', (err, files) => {
    files.forEach(file => {
        app.use(require('./routes/' + file).routePath, require('./routes/' + file))
    });
});

module.exports = app;
