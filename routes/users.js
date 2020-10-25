var express = require('express');
var router = express.Router();

const { getUsers, getUserById, updateUser, 
        createUser, deleteUser, getUserByEmail } = require('../controllers/users');

router.get('/', getUsers);
router.post('/',createUser);
router.get('/:id', getUserById);
router.get('/email/:email', getUserByEmail);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
