var express = require('express');
var router = express.Router();
const perfilController = require('../controllers/perfilcontrollers');

router.get('/', perfilController.profile);
router.get('/edit', perfilController.edit);

module.exports = router;
