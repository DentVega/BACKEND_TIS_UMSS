const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from rolfunc');
    res.status(200).json(response.rows);
  }

const createrolfunc = async function(req, res, next) {
    const { roles_idroles, funcion_idfuncion } = req.body;
    const response = await pool.query('INSERT INTO rolfunc (roles_idroles, funcion_idfuncion) VALUES ($1, $2)', [roles_idroles, funcion_idfuncion]);
    res.json({
        message: "correctly added",
        body: {
           rolfunc: { roles_idroles, funcion_idfuncion }
        }
    });
  }

const deleteRolfunc = async function(req, res, next) {
    const response = await pool.query('DELETE FROM rolfunc where roles_idroles = $1 and funcion_idfuncion = $2', [req.params.idroles, req.params.idfuncion]);
    res.json(`deleted sucessfully by ${req.params.idroles} and ${req.params.idfuncion}`);
  }

module.exports = {
   deleteRolfunc, createrolfunc, getAll
}