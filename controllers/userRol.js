const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from userrol');
    res.status(200).json(response.rows);
  }

const getRolByUserid = async function(req, res, next) {
    const response = await pool.query('SELECT * from userrol where users_idusers = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createUserRol = async function(req, res, next) {
    const { users_idusers, roles_idroles } = req.body;
    const response = await pool.query('INSERT INTO userrol (users_idusers, roles_idroles) VALUES ($1, $2)', [users_idusers, roles_idroles]);
    res.json({
        message: "correctly added",
        body: {
            userrol: { users_idusers, roles_idroles }
        }
    });
  }

const deleteUserRol = async function(req, res, next) {
    const response = await pool.query('DELETE FROM userrol where users_idusers = $1 and roles_idroles = $2', [req.params.iduser, req.params.idrol]);
    res.json(`deleted sucessfully by ${req.params.iduser} and ${req.params.idrol}`);
  }

module.exports = {
    deleteUserRol, createUserRol, getRolByUserid, getAll
}