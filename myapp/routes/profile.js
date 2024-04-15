var express = require('express');
var router = express.Router();

<<<<<<< HEAD
const perfilcontroller = require('../controllers/perfilcontrollers')

router.get('/profile', perfilcontroller.index);

module.exports = router;
=======
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
>>>>>>> 06bbd8dedb6bad35d6327cae1d4cf77b6bf7ff2a
