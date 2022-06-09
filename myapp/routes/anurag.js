var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Hi anurag Sir</h1>');
});

module.exports = router;
