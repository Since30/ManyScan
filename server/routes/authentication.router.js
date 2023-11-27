const express = require('express');

const router = express.Router();
const authCtrl = require('../controllers/authentication.controller');
const jwtMiddleware = require('../config/jwt.middleware.js');
const { validateUserRegistration, validateUserSignIn } = require('../config/sanitize.middleware.js');

//----- Route création de compte -----//
router.post('/register', validateUserRegistration, authCtrl.register);
//----- Route identification -----//
router.post('/signin', validateUserSignIn, authCtrl.signin);
//----- Route déconnection -----//
router.post('/logout', jwtMiddleware, authCtrl.logout);


module.exports = router;
