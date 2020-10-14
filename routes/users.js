var express = require('express');
var router = express.Router();

const { getUsers, getUserById, updateUser, 
        createUser, deleteUser } = require('../controllers/users');

router.get('/', getUsers);
router.post('/',createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
