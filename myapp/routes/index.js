var express = require('express');
var router = express.Router();
const controllerperfil = require("../controllers/perfilcontrollers");
const controllerlogin = require("../controllers/logincontroller")
const controllerregistro = require("../controllers/registrocontroller")


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/", controllerlogin)

router.get("/perfil", controllerperfil)

router.get("/registron", controllerregistro)

module.exports = router;
