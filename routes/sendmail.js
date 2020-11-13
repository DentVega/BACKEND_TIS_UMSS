var express = require('express');
var router = express.Router();

const { sendCredentials } = require('../controllers/sendmail');

router.get('/', sendCredentials);

module.exports = router;