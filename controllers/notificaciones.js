const pool = require('./pool');
const sendmail = require('./sendmail');

const getAll = async function (req, res, next) {
  const response = await pool.query('SELECT * from notificaciones');
  res.status(200).json(response.rows);
};

const getByIdUser = async function (req, res, next) {
  const response = await pool.query('SELECT * from notificaciones where users_idusers = $1', [req.params.id]);
  res.status(200).json(response.rows);
};

const createNotifications = async function (req, res, next) {
  const { users_idusers, revisado, mensaje, dia, email } = req.body;
  await sendmail.sendNotification(email, mensaje);
  const response = await pool.query('INSERT INTO notificaciones (users_idusers, revisado, mensaje, dia) '
    + 'VALUES ($1, $2, $3, $4)', [users_idusers, revisado, mensaje, dia]);
  const val = await pool.query('SELECT * from notificaciones where users_idusers = $1', [users_idusers]);
  res.json({
    message: 'correctly added',
    body: {
      res: val.rows
    }
  });
};

const deleteById = async function (req, res, next) {
  const response = await pool.query('DELETE FROM notificaciones where idnotificaciones = $1', [req.params.id]);
  res.json(`deleted sucessfully by ${req.params.id}`);
};

const deleteByIdUser = async function (req, res, next) {
  const response = await pool.query('DELETE FROM notificaciones where users_idusers = $1', [req.params.id]);
  res.json(`deleted sucessfully by ${req.params.id}`);
};
module.exports = {
  getAll, getByIdUser, createNotifications, deleteById, deleteByIdUser
}
