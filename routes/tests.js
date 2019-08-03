var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');
var Test = require('../models/tests');


router.get('/', auth.auth, function(req, res, next) {
    res.render('tests');
});


router.get('/getParametersInputs', function(req, res, next) {

    var id = req.body.componentID;

    var data = Test.getParametersInputs(id, function(err, data) {
        res.send(data);
        res.end();
    });

});

router.post('/saveTestWorkflow', function(req, res, next) {

    var id = req.body.elementId;
    var newComponent = req.body.newComponents;
    var updateComponent = req.body.updateComponents;

    var data = Test.saveTestWorkflow(id, newComponent, function(err, data) {
        res.send(data);
        res.end();
    });
    var data_ = Test.updateTestWorkflow(id, updateComponent, function(err, data) {
        res.send(_data);
        res.end();
    });
});

router.post('/deleteTestWorkflow', function(req, res, next) {


    var id = req.body.elementId;
    var component = req.body.component;
    var order = req.body.order;

    var data = Test.deleteTestWorkflow(id, component, order, function(err, data) {
        res.send(data);
        res.end();
    });

});

router.post('/saveTestDetails', function(req, res, next) {

    var id = req.body.elementId;
    var details = req.body.comments;

    var data = Test.saveTestDetails(id, details, function(err, data) {
        res.send(data);
        res.end();
    });

});

router.post('/saveTestBrowser', function(req, res, next) {

    var id = req.body.elementId;
    var browser = req.body.browser;

    var data = Test.saveTestBrowser(id, browser, function(err, data) {
        res.send(data);
        res.end();
    });

});


module.exports = router;