const pool = require('./pool');

const getUsers = async function(req, res, next) {
    const response = await pool.query('SELECT * from users');
    res.status(200).json(response.rows);
  }

const getUsersLocal = async function() {
  const response = await pool.query('SELECT * from users');
  return response.rows;
}

const getUserById = async function(req, res, next) {
    const response = await pool.query('SELECT * from users where idusers = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const getUserByEmail = async function(req, res, next) {
    const response = await pool.query('SELECT * from users where email = $1', [req.params.email]);
    res.status(200).json(response.rows);
  }

const createUser = async function(req, res, next) {
    const { firstname, lastname, phone, email, ci, userpassword, cicomplemento } = req.body;
    const response = await pool.query('INSERT INTO users (firstname, lastname, phone, email, ci, userpassword, cicomplemento) VALUES ($1, $2, $3, $4, $5, $6, $7)'
         , [firstname, lastname, phone, email, ci, userpassword, cicomplemento]);
    const val = await pool.query('SELECT * from users where email = $1', [email]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteUser = async function(req, res, next) {
    const response = await pool.query('DELETE FROM users where idusers = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateUser = async function(req, res, next) {
    const { firstname, lastname, phone, email, userpassword, cicomplemento } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE users SET firstname = $1, lastname = $2, phone = $3, email = $4, '
    + 'userpassword = $5, cicomplemento = $6 where idusers = $7', [ firstname, lastname, phone, email, userpassword, cicomplemento, id]);
    res.json(`updated sucessfully user: ${id}`);
  }

module.exports = {
    getUsers, getUsersLocal, getUserById, deleteUser, updateUser, createUser, getUserByEmail
}
