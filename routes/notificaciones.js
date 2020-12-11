var express = require('express');
var router = express.Router();

const { getAll, getByIdUser, createNotifications, deleteById } = require('../controllers/notificaciones');

router.get('/', getAll);
router.post('/', createNotifications);
router.get('/byuser/:id', getByIdUser);
router.delete('/:id', deleteById);
router.delete('/byuser/:id', deleteByIdUser);

module.exports = router;
