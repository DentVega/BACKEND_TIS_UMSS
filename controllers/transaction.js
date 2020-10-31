const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from transaction');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from transaction where idtransaction = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { nametransaction } = req.body;
    const response = await pool.query('INSERT INTO transaction (nametransaction) VALUES ($1)', [nametransaction]);
    const val = await pool.query('SELECT * from transaction where nametransaction = $1', [nametransaction]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM transaction where idtransaction = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { nametransaction } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE transaction SET nametransaction = $1 where idtransaction = $2', [nametransaction, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
