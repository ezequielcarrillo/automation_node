var express = require('express');
var engine = require('ejs-locals');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var app = express();
var session = require('express-session');



// view engine setup
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


var login = require('./routes/login');
var webElements = require('./routes/webElements');
var pageObject = require('./routes/pageObject');
var tests = require('./routes/tests');
var suites = require('./routes/suites');
var libraries = require('./routes/libraries');
var reports = require('./routes/reports');
var help = require('./routes/help');
var items = require('./routes/items');

app.use('/', login, items);
app.use('/login', login);
app.use('/logout', login);
app.use('/webElements', webElements);
app.use('/pageObject', pageObject);
app.use('/tests', tests);
app.use('/suites', suites);
app.use('/libraries', libraries);
app.use('/reports', reports);
app.use('/help', help);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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