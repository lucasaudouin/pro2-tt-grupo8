var express = require('express');
var router = express.Router();
<<<<<<< HEAD

let profileController = require('../controllers/profileController')



///profile/profile-edit
router.get('/profile-edit',profileController.profileEdit);

///profile/register
router.get('/register', profileController.register);

///profile/login
router.get('/login',profileController.login );

///profile/"un id del usuario"
router.get('/:id', profileController.profile);

module.exports = router
=======
const controllerperfil = require("../controllers/perfilcontrollers");
const controllerregistro = require("../controllers/productocontroller")

>>>>>>> 13ee694e19b043d41b07c0b0277ff2afb8dff0f8
