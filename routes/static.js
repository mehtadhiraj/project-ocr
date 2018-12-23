var express = require('express');
var router = express.Router();

// Include controllers
var staticController = require('../controllers/staticControllers');

router.get('/', staticController.index);

module.exports = router;