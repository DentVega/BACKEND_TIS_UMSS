var express = require('express');
var router = express.Router();

const { getAll, getById, deleteById, updateById , createOne, getByIdGrupoHorario } = require('../controllers/additionalClass');

router.get('/', getAll);
router.post('/', createOne);
router.get('/:id', getById);
router.delete('/:id', deleteById);
router.put('/:id', updateById);
router.get('/assistance/:id', getByIdGrupoHorario);

module.exports = router;