const express = require('express');

const router = express.Router();
const authCtrl = require('../controllers/authentication.controller');
const jwtMiddleware = require('../config/jwt.middleware.js');

//----- Route création de compte -----//
router.post('/register', authCtrl.register);
//----- Route identification -----//
router.post('/signin', authCtrl.signin);
//----- Route déconnection -----//
router.post('/logout', jwtMiddleware, authCtrl.logout);


module.exports = router;
