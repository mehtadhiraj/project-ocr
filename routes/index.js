var express = require('express');

// Include Controllers
var staticRoutes = require('./static');

var initRoutes = function(app){

  console.log('Initializing Routes...')

  app.use('/', staticRoutes);
  
  console.log('Routes Initialized');
} 

module.exports = initRoutes;
