const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from additionalclass');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from additionalclass where idadditionalclass = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const getByIdGrupoHorario = async function(req, res, next) {
    const response = await pool.query('SELECT * from additionalclass where grupohorarios_idgrupohorarios = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { grupohorarios_idgrupohorarios, reason, accepted } = req.body;
    const response = await pool.query('INSERT INTO additionalclass (grupohorarios_idgrupohorarios, reason, accepted) VALUES ($1, $2, $3)'
         , [grupohorarios_idgrupohorarios, reason, accepted]);
    const val = await pool.query('SELECT * from additionalclass where reason = $1', [reason]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM additionalclass where idadditionalclass = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { grupohorarios_idgrupohorarios, reason, accepted } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE additionalclass SET grupohorarios_idgrupohorarios = $1, reason = $2, accepted = $3 where idadditionalclass = $4'
    , [grupohorarios_idgrupohorarios, reason, accepted, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById, getByIdGrupoHorario
}
