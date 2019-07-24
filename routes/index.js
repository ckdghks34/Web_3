var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/testSql')();

/* GET home page. */
router.get('/', function (req, res, next) {
  db.select(function (err, result) {
    if (err) console.log(err);
    else res.send(result);
  });	
});

module.exports = router;
