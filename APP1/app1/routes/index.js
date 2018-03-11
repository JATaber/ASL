var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
              title: 'Home',
              navBrand: [{link: '/', content: 'Home'}],
              navitems: [
                {link: '/users', content: 'Users'},
                {link: '/form', content: 'Form'}
              ]});
});

router.get('/users', function(req, res, next) {
    res.render('users', {
              title: 'Users',
              users:[{"Name":"James", "Lastname":"Taber"}],
              navBrand: [{link: '/', content: 'Home'}],
              navitems: [
              {link: '/users', content: 'Users'},
              {link: '/form', content: 'Form'}
              ]});
});

router.get('/form', function(req, res, next){
  res.render('form', {
            title: 'Form',
            navBrand: [{link: '/', content: 'Home'}],
            navitems: [
            {link: '/users', content: 'Users'},
            {link: '/form', content: 'Form'}
            ]});
})

module.exports = router;
