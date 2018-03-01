var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.locals.navitems= [{link:'/', content:'Home'},
                          {link:'/users', content:'Users'}];
                          
    res.render('index', {
              title: 'Home',
              });
});

router.get('/users', function(req, res, next) {
    res.render('users', {
              title: 'Users',
              users:[{"Name":"James", "Lastname":"Taber"}],
              navitems: [
              {link: '/', content: 'Home'},
              {link: '/users', content: 'Users'}
              ]});
});

module.exports = router;
