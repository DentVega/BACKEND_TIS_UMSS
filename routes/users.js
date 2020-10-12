var express = require('express');
var router = express.Router();
const pool = require('../controllers/pool');

const getUsers = async function(req, res, next) {
  const response = await pool.query('SELECT * from users');
  res.status(200).json(response.rows);
}
/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
