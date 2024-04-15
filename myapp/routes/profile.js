var express = require('express');
var router = express.Router();

const perfilContoller = require('../controllers/perfilcontrollers');

router.get('/', perfilContoller.profile);


module.exports = router;
