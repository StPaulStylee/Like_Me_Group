var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var biosRouter = require('./routes/bios.js');
var adrianRouter = require('./routes/likes/adrian');
var jeffRouter = require('./routes/likes/jeff');
var allyRouter = require('./routes/likes/ally');

var app = express();

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/bios', biosRouter);
app.use('/likes/adrian', adrianRouter);
app.use('/likes/jeff', jeffRouter);
app.use('/likes/ally', allyRouter);



//help make sure stuff works
app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});
app.post('/', function(req, res){
  console.log('req.body=', req.body);
  res.sendStatus(200);
});

app.get('/', function(req, res){
  console.log('Received a request at', new Date());
  // __dirname is the folder this file lives in
  var filename = path.join(__dirname, 'Public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});

//set what port it listens too
app.listen(3000);
