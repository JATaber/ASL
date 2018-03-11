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
    req.session.destroy();
});

router.get('/users', function(req, res, next) {
    res.render('users', {
              title: 'Users',
              users:[{"Name":"James", "Lastname":"Taber"}],
              navitems: [
              {link: '/users', content: 'Users'},
              {link: '/form', content: 'Form'}
              ]});
    req.session.destroy();
});

router.get('/form', function(req, res, next){
  res.render('form', {
            title: 'Form',
            success: req.session.success,
            errors: req.session.errors,
            navitems: [
            {link: '/users', content: 'Users'},
            {link: '/form', content: 'Form'}
            ]});
  req.session.errors = null;
  req.session.destroy();

});

router.post('/submit', function(req, res, next){
  req.check('name', 'Please enter a valid name').notEmpty().isLength({min:2});
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Please enter a valid password').isLength({min: 3});

  const errors = req.validationErrors();
  //console.log(res.json({ errors: errors }));
  if(errors){
    req.session.errors = errors;
    req.session.success = false;
    //res.json({errors: errors});
  }else{
    req.session.success = true;
  }

  res.redirect('/form');
  //req.session.destroy(success);

});

module.exports = router;
