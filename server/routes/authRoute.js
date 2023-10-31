const express = require('express');

const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Route création de compte
router.post('/register', authCtrl.signup);
// Route identification
router.post('/signin', authCtrl.signin);
// Route déconnection
router.post('/logout',authMiddleware, authCtrl.logout);


module.exports = router;

