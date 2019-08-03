var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');
var path = require('path');
var app = express();
var WebElements = require('../models/webElements');


router.get('/', auth.auth, function(req, res, next) {
    res.render('webElements');
});

router.post('/saveWebElementsProperties', function(req, res, next) {

    var id = req.body.elementId;
    var locator = req.body.locator;
    var locatorValue = req.body.locatorValue;

    var data = WebElements.saveWebElementProperties(id, location, locatorValue, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/saveWebElementsDetails', function(req, res, next) {

    var id = req.body.elementId;
    var details = req.body.comments;

    var data = WebElements.saveWebElementDetails(id, details, function(err, data) {
        res.send(data);
        res.end();
    });
});


module.exports = router;