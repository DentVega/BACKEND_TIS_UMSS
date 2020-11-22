const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from addicionalreport');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from addicionalreport where idaddicionalreport= $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { assistance_idassistance, archivo } = req.body;
    const response = await pool.query('INSERT INTO addicionalreport (assistance_idassistance, archivo) VALUES ($1, $2)', [assistance_idassistance, archivo ]);
    const val = await pool.query('SELECT * from addicionalreport where assistance_idassistance = $1', [assistance_idassistance]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM addicionalreport where idaddicionalreport= $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { assistance_idassistance, archivo } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE addicionalreport SET assistance_idassistance = $1, archivo = $2 where idaddicionalreport = $3', [assistance_idassistance, archivo, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
