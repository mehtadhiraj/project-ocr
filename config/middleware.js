var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('ejs');
app = express();

var initMiddleware = function(app){
    console.log('Initializing Middlewares....');

    // view engine setup
    app.set('views', path.join(__dirname, '/../views'));
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '/../public')));

    console.log('Middleware Initialized');
}

module.exports = initMiddleware;