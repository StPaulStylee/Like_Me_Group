var express = require('express');

//bring in the router from express library
var router = express.Router();


//var that holds likes
var allyLikes = '0';

//on get send var adrian likes and adds plus one then turns to string
router.get('/',function (req, res) {
  res.send(allyLikes);
  var stringToNumber = parseInt(allyLikes);
  stringToNumber++;
  allyLikes = stringToNumber.toString();
  //res.sendStatus(418);
});


module.exports = router;//very important has to export
