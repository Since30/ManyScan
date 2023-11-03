const router = require('express').Router();
const usersControllers = require('../controllers/users.controllers');
const jwtMiddleware = require('../config/jwt.middleware.js'); // JWT middleware check le token de l'utilisateur connecté pour permettre ou non d'avoir acces aux infos


router.get('/get-users', jwtMiddleware, usersControllers.getAllUsers);
router.get('/:id', jwtMiddleware, usersControllers.getUser);
// router.post('/', usersControllers.createUser); // create user est une fonction lié au authentification à a moins que tu permette aux administrateurs de créer des utilisateurs pas un autre biet 
router.put('/edit/:id', jwtMiddleware, usersControllers.updateUser);
router.delete('/delete/:id', jwtMiddleware, usersControllers.delelteUser);

module.exports = router;
