var express = require('express');
var router = express.Router();

//Produce = require('../models/produce.js');

var Sequelize = require('sequelize');
const sequelize = new Sequelize('product', 'root', 'root',{
  host:'localhost',
  dialect: 'mysql',
  port: 8889,
  define:{
    timestamps: false
  }
})

const Produce = sequelize.define(
  'produce',{
            'id':{
              type:Sequelize.INTEGER,
              primaryKey: true,
              },
              'name':{
                type:Sequelize.STRING
              }
          },
          {
          tableName: 'produce'
})

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

  //var prodObj = new Produce({}, req);

  produce = Produce.findAll().then(produce=>{
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



router.get('/add', function(req, res, next) {
    res.render('add', {
              title: 'Produce',
              users:[{"Name":"James", "Lastname":"Taber"}],
              navitems: [
                {link: '/users', content: 'Users'},
                {link: '/form', content: 'Form'},
                {link:'/product', content:'Product'}
              ]});
    req.session.destroy();
});

router.get('/update', function(req, res, next){
  res.render('update', {
            title: 'Produce',
            users:[{"Name":"James", "Lastname":"Taber"}],
            navitems: [
              {link: '/users', content: 'Users'},
              {link: '/form', content: 'Form'},
              {link:'/product', content:'Product'}
            ]});
    req.session.destroy();
})

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

router.post('/addProduce', function(req, res, next){
  var name = req.body.name

  var produce = Produce.create({
    name: req.body.name
  });

  res.redirect('/product');
  //req.session.destroy();

});

router.post('/delete', function(req, res, next){
  var name = req.body.name

  var produce = Produce.create({
    name: req.body.name
  });

  res.redirect('/product');
  //req.session.destroy();

});

router.post('/updateProduce', function(req, res, next){
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
