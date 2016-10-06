var express = require('express');

//bring in the router from express library
var router = express.Router();

//object that holds likes

var adrianLikes = 0;

router.get('/',function (req, res) {
  res.send(adrianLikes);
});
//updates likes by 1 every post
router.post('/', function(req, res){
  adrianLikes++;
});

module.exports = router;//very important has to export
