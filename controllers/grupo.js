const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from grupo');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from grupo where idgrupo= $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { materia_idmateria } = req.body;
    const response = await pool.query('INSERT INTO grupo (materia_idmateria) VALUES ($1)'
         , [materia_idmateria]);
    // const val = await pool.query('SELECT * from grupo where materia_idmateria = $1', [materia_idmateria]);
    const val = await pool.query('select * from grupo order by idgrupo desc limit 1');
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM grupo where idgrupo = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { materia_idmateria } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE grupo SET materia_idmateria = $1 where idgrupo = $2', [materia_idmateria, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
