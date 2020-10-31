var express = require('express');
var router = express.Router();

const { getAll, getFacultadById, deleteFacultad,
        updateFacultad, createFacultad } = require('../controllers/facultad');

router.get('/', getAll);
router.post('/',createFacultad);
router.get('/:id', getFacultadById);
router.delete('/:id', deleteFacultad);
router.put('/:id', updateFacultad);

module.exports = router;
