var express = require('express');
var router = express.Router();

const { getAll, createrolfunc, deleteRolfunc} = require('../controllers/rolFunc');

router.get('/', getAll);
router.post('/', createrolfunc);
router.delete('/:idroles/:idfuncion', deleteRolfunc);

module.exports = router;
        