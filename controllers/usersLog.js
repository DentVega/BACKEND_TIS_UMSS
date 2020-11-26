const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from userslog');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from userslog where iduserslog = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { transaction_idtransaction, users_idusers, timechange, datechange, state, check } = req.body;
    const response = await pool.query('INSERT INTO userslog (transaction_idtransaction, users_idusers, timechange, datechange, state, "check") '
     + 'VALUES ($1, $2, $3, $4, $5, $6)', [transaction_idtransaction, users_idusers, timechange, datechange, state, check]);
    const val = await pool.query('SELECT * from userslog where users_idusers = $1', [users_idusers]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM userslog where iduserslog = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { transaction_idtransaction, users_idusers, timechange, datechange, state, check } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE userslog SET transaction_idtransaction = $1, users_idusers = $2, ' 
    +'timechange = $3, datechange = $4, state = $5, "check" = $6 where iduserslog = $7', [transaction_idtransaction, users_idusers, timechange, datechange, state, check, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
