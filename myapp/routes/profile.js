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

