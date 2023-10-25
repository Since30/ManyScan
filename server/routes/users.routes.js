const router = require('express').Router();
const usersControllers = require('../controllers/users.controllers');

router.get('/', usersControllers.getAllUsers);
router.post('/', usersControllers.createUser);
router.put('/:id', usersControllers.updateUser);
router.delete('/', usersControllers.delelteUser);

module.exports = router;
