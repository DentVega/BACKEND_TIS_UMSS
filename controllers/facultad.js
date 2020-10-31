const pool = require('./pool');

const getAll = async function(req, res, next) {
    const response = await pool.query('SELECT * from facultad');
    res.status(200).json(response.rows);
  }

const getFacultadById = async function(req, res, next) {
    const response = await pool.query('SELECT * from facultad where idfacultad = $1', [req.params.id]);
    res.status(200).json(response.rows);
  }

const createFacultad = async function(req, res, next) {
    const { namefacultad } = req.body;
    const response = await pool.query('INSERT INTO facultad (namefacultad) VALUES ($1)'
         , [namefacultad]);
    const val = await pool.query('SELECT * from facultad where namefacultad = $1', [namefacultad]);
    res.json({
        message: "correctly added",
        body: {
            res: val.rows
        }
    });
  }

const deleteFacultad = async function(req, res, next) {
    const response = await pool.query('DELETE FROM facultad where idfacultad = $1', [req.params.id]);
    res.json(`deleted sucessfully by ${req.params.id}`);
  }

const updateFacultad = async function(req, res, next) {
    const { namefacultad } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE facultad SET namefacultad = $1 where idfacultad = $2', [namefacultad, id]);
    res.json(`updated sucessfully user: ${id}`);
  }

module.exports = {
    deleteFacultad, updateFacultad, createFacultad, getAll, getFacultadById
}
