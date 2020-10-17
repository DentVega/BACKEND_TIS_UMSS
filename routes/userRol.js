var express = require('express');
var router = express.Router();

const { deleteUserRol, createUserRol, 
        getRolByUserid, getAll } = require('../controllers/userRol');

router.get('/', getAll);
router.post('/', createUserRol);
router.get('/:id', getRolByUserid);
router.delete('/:iduser/:idrol', deleteUserRol);

module.exports = router;
        