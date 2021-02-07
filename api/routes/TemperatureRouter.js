var express = require('express');
var router = express.Router();

let TemperatureController = require('../controllers/TemperatureController')

router.get('/', TemperatureController.getReadings)

module.exports = router;