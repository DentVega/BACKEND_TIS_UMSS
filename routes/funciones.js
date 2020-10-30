var express = require('express');
var router = express.Router();

const { getAll, createFuncion, updateFuncion,
        deleteFuncion, getFuncionByEmail, getFuncionById } = require('../controllers/funciones');

router.get('/', getAll);
router.post('/', createFuncion);
router.get('/:id', getFuncionById);
router.delete('/:id', deleteFuncion);
router.put('/:id', updateFuncion)
router.get('/email/:email', getFuncionByEmail);

module.exports = router;
        