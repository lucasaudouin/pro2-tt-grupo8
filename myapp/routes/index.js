var express = require('express');
var router = express.Router();
const controllerperfil = require("../controllers/perfilcontrollers");
const controllerlogin = require("../controllers/logincontroller")
const controllerregistro = require("../controllers/registrocontroller")

router.get("/", controllerlogin.loginPagina);

router.get("/perfil", controllerperfil.perfilPagina);

router.get("/registro", controllerregistro.registroPagina);

module.exports = router;
