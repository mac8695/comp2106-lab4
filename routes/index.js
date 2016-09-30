var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CHAVAN FAMILY' });
});

/* GET mahesh page */
router.get('/mahesh', function(req, res, next) {

  // laod the view and pass the mahesh page
  res.render('mahesh', { title: 'Myself'});
});

/* GET vishnu page */
router.get('/vishnu', function(req, res, next) {

    // laod the view and pass the vishnu page
    res.render('vishnu', { title: 'Bother'});
});

/* GET ankush page */
router.get('/ankush', function(req, res, next) {

    // laod the view and pass the ankush page
    res.render('ankush', { title: 'Father'});
});

/* GET kamal page */
router.get('/kamal', function(req, res, next) {

    // laod the view and pass the kamal page
    res.render('kamal', { title: 'Mother'});
});
module.exports = router;
