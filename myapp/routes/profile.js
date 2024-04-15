var express = require('express');
var router = express.Router();

const perfilcontroller = require('../controllers/perfilcontrollers')

router.get('/profile', perfilcontroller.index);

module.exports = router;
