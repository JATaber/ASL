var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
              title: 'Home',
              navitems: [
                {link: '/users', content: 'Users'},
                {link: '/form', content: 'Form'}
              ]});
});

router.get('/users', function(req, res, next) {
    res.render('users', {
              title: 'Users',
              users:[{"Name":"James", "Lastname":"Taber"}],
              navitems: [
              {link: '/users', content: 'Users'},
              {link: '/form', content: 'Form'}
              ]});
});

router.get('/form', function(req, res, next){
  res.render('form', {
            title: 'Form',
            success: false,
            errors: req.session.errors,
            navitems: [
            {link: '/users', content: 'Users'},
            {link: '/form', content: 'Form'}
            ]});
  req.session.errors = null;
});

router.post('/submit', function(req, res, next){
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Please enter a valid password').isLength({min: 2}).equals(req.body.confirmPassword);

  var errors = req.validatonErrors();
  if(errors){

  }
});

module.exports = router;
