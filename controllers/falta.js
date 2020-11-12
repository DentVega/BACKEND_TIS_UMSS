const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from falta');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from falta where idfalta= $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { users_idusers, fecha, archivo } = req.body;
    const response = await pool.query('INSERT INTO falta (users_idusers, fecha, archivo) VALUES ($1, $2, $3)'
         , [users_idusers, fecha, archivo]);
    const val = await pool.query('SELECT * from falta where archivo = $1', [archivo]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM falta where idfalta = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { users_idusers, fecha, archivo } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE falta SET users_idusers = $1, fecha = $2, archivo = $3 where idfalta = $4', [users_idusers, fecha, archivo, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
