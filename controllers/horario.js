const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from horario');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from horario where idhorario = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { facultad_idfacultad, horaini, horafin } = req.body;
    const response = await pool.query('INSERT INTO horario (facultad_idfacultad, horaini, horafin) VALUES ($1, $2, $3)'
         , [facultad_idfacultad, horaini, horafin]);
    const val = await pool.query('SELECT * from horario where facultad_idfacultad = $1', [facultad_idfacultad]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM horario where idhorario = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { facultad_idfacultad, horaini, horafin } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE horario SET facultad_idfacultad = $1, horaini = $2, horafin = $3 where idhorario = $4', [facultad_idfacultad, horaini, horafin, id]);
    res.json(`updated sucessfully user: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById
}
