var express = require('express');
var router = express.Router();

const { getAll, getById, deleteById, updateById , createOne, getByUser } = require('../controllers/grupoHorarios');

router.get('/', getAll);
router.post('/', createOne);
router.get('/:id', getById);
router.delete('/:id', deleteById);
router.put('/:id', updateById);
router.get('/user/:id', getByUser);

module.exports = router;