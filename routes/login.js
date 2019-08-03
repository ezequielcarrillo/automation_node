var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    message = '';
    res.render('login');

});

router.post('/login', function(req, res, next) {
    req.session.user = req.body.username;
    res.redirect('/webElements');
    //set session user and browser cockies

});

router.post('/logout', function(req, res, next) {
    req.session.destroy();
    res.redirect('/');

});


module.exports = router;