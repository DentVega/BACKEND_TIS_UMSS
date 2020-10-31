var express = require('express');
var router = express.Router();

const { getAll, getById, deleteById, updateById , createOne } = require('../controllers/usersLog');

router.get('/', getAll);
router.post('/', createOne);
router.get('/:id', getById);
router.delete('/:id', deleteById);
router.put('/:id', updateById);

module.exports = router;