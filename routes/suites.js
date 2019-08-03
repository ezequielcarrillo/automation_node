var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');
var Suites = require('../models/suites');

router.get('/', auth.auth, function(req, res, next) {
    res.render('suites');
});

router.post('/saveSuiteTests', function(req, res, next) {

    var id = req.body.elementId;
    var testsIds = req.body.tests;

    var data = Suites.saveSuiteTests(id, testsIds, function(err, data) {
        res.end();
    });
});

router.post('/saveSuiteDetails', function(req, res, next) {

    var id = req.body.elementId;
    var details = req.body.details;

    var data = Suites.saveSuiteDetails(is, details, function(err, data) {
        res.end();
    });
});

router.post('/removeSuiteTests', function(req, res, next) {

    var id = req.body.elementId;
    var testsId = req.body.tests;

    var data = Suites.removeTestFromSuite(id, testsId, function(err, data) {
        res.end();
    });
});


module.exports = router;