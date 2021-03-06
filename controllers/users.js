const pool = require('./pool');

const getUsers = async function(req, res, next) {
    const response = await pool.query('SELECT * from users');
    res.status(200).json(response.rows);
  }

const getUserById = async function(req, res, next) {
    const response = await pool.query('SELECT * from users where idusers = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createUser= async function(req, res, next) {
    const { firstname, lastname, phone, email, userpassword } = req.body;
    const response = await pool.query('INSERT INTO users (firstname, lastname, phone, email, userpassword) VALUES ($1, $2, $3, $4, $5)'
         , [firstname, lastname, phone, email, userpassword]);
    res.json({
        message: "correctly added",
        body: {
            user: {firstname, lastname, phone, email, userpassword}
        }
    });
  }

const deleteUser = async function(req, res, next) {
    const response = await pool.query('DELETE FROM users where idusers = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateUser = async function(req, res, next) {
    const { firstname, lastname, phone, email, userpassword } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE users SET firstname = $1, lastname = $2, phone = $3, email = $4,'
    + 'userpassword = $5,  where idusers = $6', [ firstname, lastname, phone, email, userpassword, id]);
    res.json("updated sucessfully");
  }

module.exports = {
    getUsers, getUserById, deleteUser, updateUser, createUser
}