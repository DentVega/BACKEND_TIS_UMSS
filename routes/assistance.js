var express = require('express');
var router = express.Router();

const { getAll, getById, deleteById, updateById , createOne,
        getMonthByDate, getWeekByDate } = require('../controllers/assistance');

router.get('/', getAll);
router.post('/', createOne);
router.get('/:id', getById);
router.delete('/:id', deleteById);
router.put('/:id', updateById);
router.get('/month/:date', getMonthByDate);
router.get('/week/:date', getWeekByDate);

module.exports = router;