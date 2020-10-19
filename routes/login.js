var express = require('express');
var router = express.Router();

const { getUser } = require('../controllers/login');

router.get('/:email/:password', getUser);

module.exports = router;