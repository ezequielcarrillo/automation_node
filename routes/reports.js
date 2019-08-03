var express = require('express');
var router = express.Router();
var auth = require('../middleware/authentication.js');

router.get('/', auth.auth, function(req, res, next) {
    res.render('reports');
});


module.exports = router;