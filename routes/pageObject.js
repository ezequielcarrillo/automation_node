var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');
var PageObject = require('../models/pageObject');

router.get('/', auth.auth, function(req, res, next) {
    res.render('pageObject');

});

router.post('/savePageObjectDetails', function(req, res, next) {

    var id = req.body.elementId;
    var details = req.body.comments;

    var data = PageObject.savePageObjectDetails(id, details, function(err, data) {
        res.end();
    });
});

router.post('/savePageObjectParameter', function(req, res, next) {

    var id = req.body.elementId;
    var parameters = req.body.parameters;

    var data = PageObject.savePageObjectParameter(id, parameters, function(err, data) {
        res.end();
    });
});

router.post('/deletePageObjectParameter', function(req, res, next) {

    var id = req.body.elementId;
    var parameterId = req.body.parameterId;
    var data = PageObject.deletePageObjectParameter(id, parameterId, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/savePageObjectAutomation', function(req, res, next) {

    var id = req.body.elementId;
    var automation = req.body.automation;

    var data = PageObject.savePageObjectAutomation(id, automation, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/deletePageObjectAutomation', function(req, res, next) {

    var id = req.body.elementId;
    var automation = req.body.parameterId;

    var data = PageObject.deletePageObjectAutomation(id, automation, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/savePageObjectScript', function(req, res, next) {

    var id = req.body.elementId;
    var script = req.body.script;

    var data = PageObject.savePageObjectScript(id, script, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.post('/deleteScreenshot', function(req, res, next) {

    var id = req.body.elementId;

    var data = PageObject.deleteScreenshot(id, function(err, data) {
        res.send(data);
        res.end();
    });
});

router.get('/uploadScreenshot', function(req, res, next) {
    res.redirect('/PageObject')
});

router.post('/uploadScreenshot', function(req, res, next) {
    /*
        tempfile = params['screenshot'][: tempfile]
        filename = params['screenshot'][: filename]
        component_id = params[: component_id]
   */
    var data = PageObject.uploadScreenshot(tempfile, filename, component_id, function(err, data) {
        res.redirect('/PageObject')
    });

});

module.exports = router;