var express = require('express');
var router = express.Router();
var passport = require('passport');


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/login',
    function (req, res) {
        res.render('login');
    });
router.get('/data',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        res.render('data');
    });

router.post('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });


router.get('/logout',
    function (req, res) {
        req.logout();
        res.redirect('/');
    });


module.exports = router;
