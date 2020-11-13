var express = require('express');
var router = express.Router();

const { sendCredentials } = require('../controllers/sendmail');

router.post('/', sendCredentials);

module.exports = router;