const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from carrera');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from carrera where idcarrera = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { facultad_idfacultad, namecarrera, descripcion } = req.body;
    const response = await pool.query('INSERT INTO carrera (facultad_idfacultad, namecarrera, descripcion) VALUES ($1, $2, $3)'
         , [facultad_idfacultad, namecarrera, descripcion]);
    const val = await pool.query('SELECT * from carrera where namecarrera = $1', [namecarrera]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM carrera where idcarrera = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { facultad_idfacultad, namecarrera, descripcion } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE carrera SET facultad_idfacultad = $1, namecarrera = $2, descripcion = $3 where idcarrera = $4', [facultad_idfacultad, namecarrera, descripcion, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
