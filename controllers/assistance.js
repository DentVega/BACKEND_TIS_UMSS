const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from assistance');
    res.status(200).json(response.rows);
  }

const getById = async function(req, res, next) {
    const response = await pool.query('SELECT * from assistance where idassistance= $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createOne = async function(req, res, next) {
    const { grupohorarios_idgrupohorarios, beginweek, endweek, platform, classcontain, observations, sign } = req.body;
    const response = await pool.query('INSERT INTO assistance (grupohorarios_idgrupohorarios, beginweek, endweek, '
      +'platform, classcontain, observations, sign) VALUES ($1, $2, $3, $4, $5, $6, $7)'
         , [grupohorarios_idgrupohorarios, beginweek, endweek, platform, classcontain, observations, sign]);
    const val = await pool.query('SELECT * from assistance where beginweek = $1 and grupohorarios_idgrupohorarios = $2', [beginweek, grupohorarios_idgrupohorarios]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteById = async function(req, res, next) {
    const response = await pool.query('DELETE FROM assistance where idassistance = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateById = async function(req, res, next) {
    const { grupohorarios_idgrupohorarios, beginweek, endweek, platform, classcontain, observations, sign } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE assistance SET grupohorarios_idgrupohorarios = $1, beginweek = $2, endweek = $3,'
    +' platform = $4, classcontain = $5, observations = $6, sign = $7 where idassistance = $8', [grupohorarios_idgrupohorarios, beginweek, endweek, platform, classcontain, observations, sign, id]);
    res.json(`updated sucessfully by: ${id}`);
  }

const getWeekByDate = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM assistance where beginweek <= $1 and endweek >= $1', [req.params.date]);
    res.status(200).json(response.rows);
  }

const getMonthByDate = async function(req, res, next) {
    const response = await pool.query('SELECT * FROM assistance where extract(month from beginweek) = $1', [req.params.date]);
    res.status(200).json(response.rows);
  }

module.exports = {
   getAll, updateById, deleteById, createOne, getById, getMonthByDate, getWeekByDate
}
