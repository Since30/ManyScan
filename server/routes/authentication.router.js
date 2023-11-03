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

//----- Réinit le mot de passe -----//
router.post('/edit-password/:id', jwtMiddleware, authCtrl.editPassword); // Possibilité d'ajouter une notif et token aux headers de l'email


module.exports = router;
