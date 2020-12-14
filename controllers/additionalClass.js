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
    const response = await pool.query('SELECT * from additionalclass where assistance_idassistance  = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { grupohorarios_idgrupohorarios, falta_idfalta, accepted, timeclass, dateclass } = req.body;
    console.log("prueba")
    const response = await pool.query('INSERT INTO additionalclass (grupohorarios_idgrupohorarios, falta_idfalta, accepted, timeclass, dateclass) VALUES ($1, $2, $3, $4, $5)'
         , [grupohorarios_idgrupohorarios, falta_idfalta, accepted, timeclass, dateclass]);
    const val = await pool.query('SELECT * from additionalclass where grupohorarios_idgrupohorarios = $1 and falta_idfalta = $2', [grupohorarios_idgrupohorarios]);
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
    const { grupohorarios_idgrupohorarios, falta_idfalta, assistance_idassistance, accepted, timeclass, dateclass } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE additionalclass SET grupohorarios_idgrupohorarios = $1, falta_idfalta = $2, assistance_idassistance = $3, accepted = $4, timeclass = $5 , dateclass = $6 where idadditionalclass = $7'
    , [grupohorarios_idgrupohorarios, falta_idfalta, assistance_idassistance, accepted, timeclass, dateclass, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById, getByIdGrupoHorario
}
