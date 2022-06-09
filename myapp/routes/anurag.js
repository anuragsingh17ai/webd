var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name/:mot', function(req, res, next) {
  res.send('HI '+req.params.name+" Sir i know it's "+req.params.mot);
});

module.exports = router;
