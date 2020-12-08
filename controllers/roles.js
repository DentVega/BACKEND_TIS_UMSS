const pool = require('./pool');

const getRoles = async function(req, res, next) {
    const response = await pool.query('SELECT * from roles');
    res.status(200).json(response.rows);
  }

const getRolById = async function(req, res, next) {
    const response = await pool.query('SELECT * from roles where idroles = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createRol = async function(req, res, next) {
    const { rolename } = req.body;
    const response = await pool.query('INSERT INTO roles (rolename) VALUES ($1)', [rolename]);
    const val = await pool.query('SELECT * from roles where rolename = $1', [rolename]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteRol = async function(req, res, next) {
    const response = await pool.query('DELETE FROM roles where idroles = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateRol = async function(req, res, next) {
    const { rolename } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE roles SET rolename = $1 where idroles = $2', [ rolename, id]);
    res.json("updated sucessfully");
  }

module.exports = {
    getRolById, getRoles, updateRol, deleteRol, createRol
}