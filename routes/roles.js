var express = require('express');
var router = express.Router();

const { getRolById, getRoles, createRol,
        updateRol, deleteRol } = require('../controllers/roles');

router.get('/', getRoles);
router.post('/', createRol);
router.get('/:id', getRolById);
router.delete('/:id', deleteRol);
router.put('/:id', updateRol);

module.exports = router;
