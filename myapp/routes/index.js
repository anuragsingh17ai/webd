var express = require('express');
var router = express.Router();

//for now i know only one set of router and res can be executed at a time.........
router.get('/hello', function(req, res, next) {
  res.send("<h1>HI IT'S INTERESTING</h1>");
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
