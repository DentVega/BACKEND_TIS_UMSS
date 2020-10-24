const pool = require('./pool');

const getUser = async function(req, res, next) {
    const response = await pool.query('SELECT * from users where email = $1 and userpassword = $2' , [req.params.email, req.params.password]);
    res.status(200).json(response.rows);
  }

module.exports = {
    getUser
}