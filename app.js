var createError = require('http-errors');
var express = require('express');
var cron = require('node-cron');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let rolesRouter = require('./routes/roles');
let userrolRouter = require('./routes/userRol');
let loginRouter = require('./routes/login');
let rolfuncRouter = require('./routes/rolFunc');
let funcionesRouter = require('./routes/funciones');
let facultadRouter = require('./routes/facultad');
let horarioRouter = require('./routes/horario');
let carreraRouter = require('./routes/carrera');
let materiaRouter = require('./routes/materia');
let grupoRouter = require('./routes/grupo');
let grupoHorariosRouter = require('./routes/grupoHorarios');
let transactionRouter = require('./routes/transaction');
let usersLogRouter = require('./routes/usersLog');
let faltaRotuer = require('./routes/falta');
let sendmailRouter = require('./routes/sendmail');
let assistanceRouter = require('./routes/assistance');
let addicionalReportRouter = require('./routes/addicionalReport');
let additionalClassRouter = require('./routes/additionalClass');
let notificationsRouter = require('./routes/notificaciones');
let jobs = require('./controllers/jobs');

var app = express();

// Schedule tasks to be run on the server.
cron.schedule('50 * * * *', function() {
  try {
    console.log('running a task every minute');
    jobs.notificarClases();
  } catch (e) {
    console.error('Error schedule', e.message);
  }
});

cron.schedule('58 * * * 5', function() {
  try {
    console.log('running a task every minute viernes');
    jobs.notificarClases();
  } catch (e) {
    console.error('Error schedule', e.message);
  }
});

app.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/userrol', userrolRouter);
app.use('/login', loginRouter);
app.use('/rolfun', rolfuncRouter);
app.use('/funcion', funcionesRouter);
app.use('/facultad', facultadRouter);
app.use('/horario', horarioRouter);
app.use('/carrera', carreraRouter);
app.use('/materia', materiaRouter);
app.use('/grupo', grupoRouter);
app.use('/grupohorarios', grupoHorariosRouter);
app.use('/transaction', transactionRouter);
app.use('/userslog', usersLogRouter);
app.use('/falta', faltaRotuer);
app.use('/sendmail', sendmailRouter);
app.use('/assistance', assistanceRouter);
app.use('/addicional', addicionalReportRouter);
app.use('/additionalclass', additionalClassRouter);
app.use('/notificaciones', notificationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
