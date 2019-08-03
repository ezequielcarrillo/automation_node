var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');
var UploadFiles = require('../models/uploadFiles');

router.get('/', auth.auth, function(req, res, next) {
    res.render('libraries');
});

router.get('/uploadLibraries', function(req, res, next) {
    res.redirect('/Libraries')
});

router.post('/uploadLibraries', function(req, res, next) {
    //tempfile = params['library'][: tempfile]
    //filename = params['library'][: filename]
    var data = UploadFiles.uploadLibrary(tempfile, filename)

    res.redirect('/Libraries')
});


module.exports = router;