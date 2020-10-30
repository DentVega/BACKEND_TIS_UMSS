const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from funcion');
    res.status(200).json(response.rows);
  }

const getFuncionById = async function(req, res, next) {
    const response = await pool.query('SELECT * from funcion where idfuncion = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const getFuncionByEmail = async function(req, res, next) {
    const response = await pool.query('SELECT f.* from users u, userrol ur, roles r, rolfunc rf, funcion f ' 
    +'where u.idusers = ur.users_idusers and ur.roles_idroles = r.idroles and ' 
    +'r.idroles = rf.roles_idroles and rf.funcion_idfuncion = f.idfuncion and u.email = $1', [req.params.email]);
    res.status(200).json(response.rows);
  }

const createFuncion = async function(req, res, next) {
    const { funcionname } = req.body;
    const response = await pool.query('INSERT INTO funcion (funcionname) VALUES ($1)'
         , [funcionname]);
    const val = await pool.query('SELECT * from funcion where funcionname = $1', [funcionname]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteFuncion = async function(req, res, next) {
    const response = await pool.query('DELETE FROM funcion where idfuncion = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateFuncion = async function(req, res, next) {
    const { funcionname } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE funcion SET funcionname = $1 where idfuncion = $2', [funcionname, id]);
    res.json(`updated sucessfully user: ${id}`);
  }

module.exports = {
    getAll, deleteFuncion, updateFuncion, createFuncion, getFuncionByEmail, getFuncionById
}
