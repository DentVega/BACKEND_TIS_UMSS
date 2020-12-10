const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from grupohorarios');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from grupohorarios where idgrupohorarios = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const getByIdGrupo = async function(req, res, next) {
  const response = await pool.query('SELECT * from grupohorarios where grupo_idgrupo = $1', [req.params.id]);
  res.status(200).json(response.rows);
}

const createOne = async function(req, res, next) {
    const { horario_idhorario, grupo_idgrupo, users_idusers, dia } = req.body;
    const response = await pool.query('INSERT INTO grupohorarios (horario_idhorario, grupo_idgrupo, users_idusers, dia) '
     + 'VALUES ($1, $2, $3, $4)', [horario_idhorario, grupo_idgrupo, users_idusers, dia]);
    const val = await pool.query('SELECT * from grupohorarios where grupo_idgrupo = $1', [grupo_idgrupo]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM grupohorarios where idgrupohorarios = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { horario_idhorario, grupo_idgrupo, users_idusers, dia } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE grupohorarios SET horario_idhorario = $1, grupo_idgrupo = $2'
    + ', users_idusers = $3, dia = $4 where idgrupohorarios = $5', [horario_idhorario, grupo_idgrupo, users_idusers, dia, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

const getByUser = async function(req, res, next) {
    const response = await pool.query('SELECT * from grupohorarios where users_idusers = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById, getByUser, getByIdGrupo
}
