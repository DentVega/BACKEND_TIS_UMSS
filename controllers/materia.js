const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from materia');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from materia where idmateria= $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { carrera_idcarrera, namemateria, descripcion } = req.body;
    const response = await pool.query('INSERT INTO materia (carrera_idcarrera, namemateria, descripcion) VALUES ($1, $2, $3)'
         , [carrera_idcarrera, namemateria, descripcion]);
    const val = await pool.query('SELECT * from materia where namemateria = $1', [namemateria]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM materia where idmateria = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { carrera_idcarrera, namemateria, descripcion } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE materia SET carrera_idcarrera = $1, namemateria = $2, descripcion = $3 where idmateria = $4', [carrera_idcarrera, namemateria, descripcion, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
