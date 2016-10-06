var express = require('express');

//bring in the router from express library
var router = express.Router();

var bios = [
  {name:'Adrian Flak',
bio:'Enjoys eating cud and working out.',
image:'assets/images/adrian.jpg'},{
  name:'Ally Boyd',
  bio:'Fights Mojo Jojo. DEFINITELY not afraid of clowns.',
  image:'assets/images/ally.jpg'
},{
  name:'Jeff Miller',
  bio:'Enjoys eating the same dry food everyday... Forever. And burying my poop in sand.',
  image:'assets/images/jeff.jpg'
}];//end of array of objects of "people?"

router.get('/',function (req, res) {
  res.send(bios);
});



module.exports = router;//very important has to export
