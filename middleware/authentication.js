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


// Authentication and Authorization Middleware
exports.auth = function(req, res, next) {

    /*
        if (req.session && req.session.user == "ecarrillo" && req.session.admin) {
            return next();
        } else {
            return res.sendStatus(401);
        }
        */
    return next();
};