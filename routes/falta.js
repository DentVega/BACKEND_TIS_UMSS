var express = require('express');
var router = express.Router();

const { getAll, getById, deleteById, updateById , createOne } = require('../controllers/falta');

router.get('/', getAll);
router.post('/', createOne);
router.get('/:id', getById);
router.delete('/:id', deleteById);
router.put('/:id', updateById);
<<<<<<< HEAD
/*s*/
=======
/**/
>>>>>>> 60e39588d4c0d8916ff085a325d7cf8511b2f7a1
module.exports = router;