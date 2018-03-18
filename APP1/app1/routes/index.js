var express = require('express');
var router = express.Router();

Produce = require('../models/produce.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
              title: 'Home',
              navitems: [
                {link: '/users', content: 'Users'},
                {link: '/form', content: 'Form'},
                {link:'/product', content:'Product'}
              ]});
    req.session.destroy();
});

router.get('/users', function(req, res, next) {
    res.render('users', {
              title: 'Users',
              users:[{"Name":"James", "Lastname":"Taber"}],
              navitems: [
                {link: '/users', content: 'Users'},
                {link: '/form', content: 'Form'},
                {link:'/product', content:'Product'}
              ]});
    req.session.destroy();
});

router.get('/product', function(req, res, next){

  var prodObj = new Produce({}, req);

  prodObj.getAll(function(produce){

        res.render('product', {
                  title: 'Produce',
                  product: produce,
                  navitems: [
                    {link: '/users', content: 'Users'},
                    {link: '/form', content: 'Form'},
                    {link:'/product', content:'Product'}
                  ]});
        req.session.destroy();
        })
    });

router.get('/form', function(req, res, next){
  res.render('form', {
            title: 'Form',
            success: req.session.success,
            errors: req.session.errors,
            navitems: [
              {link: '/users', content: 'Users'},
              {link: '/form', content: 'Form'},
              {link:'/product', content:'Product'}
            ]});
  req.session.errors = null;
  req.session.success = null;

});

router.get('/formFeedback', function(req, res, next) {
    res.render('formFeedback', {
              title: 'Form',
              navitems: [
                {link: '/users', content: 'Users'},
                {link: '/form', content: 'Form'},
                {link:'/product', content:'Product'}
              ]});
    //req.session = {};
});

router.post('/submit', function(req, res, next){
  req.checkBody('name', 'Please enter a valid name').isLength({min:2});
  req.checkBody('email', 'Invalid email address').isEmail();
  req.checkBody('password', 'Please enter a valid password').isLength({min: 3});

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
  //req.session.destroy();

});

module.exports = router;
