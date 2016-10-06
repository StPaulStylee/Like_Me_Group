var express = require('express');

//bring in the router from express library
var router = express.Router();

//object that holds likes

var allyLikes = 0;

router.get('/',function (req, res) {
  res.send(allyLikes);
});
//updates likes by 1 every post
router.post('/', function(req, res){
  allyLikes++;
});

module.exports = router;//very important has to export
