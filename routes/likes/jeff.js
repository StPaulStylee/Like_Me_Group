var express = require('express');

//bring in the router from express library
var router = express.Router();

//object that holds likes

var jeffLikes = 0;
//sends number of likes
router.get('/',function (req, res) {
  res.send(jeffLikes);
});
//updates likes by 1 every post
router.post('/', function(req, res){
  jeffLikes++;
});

module.exports = router;//very important has to export
