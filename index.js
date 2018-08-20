const express = require("express");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

var contacted = [];

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname + '/public/js'));

const accountSid = 'AC5a4bbb2789e5fd2de2e96a8e8753c7e9';
const authToken = '0753d7bc85f18c6c15c3b7a3c98c908e';
const client = require('twilio')(accountSid, authToken);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.post('/sendText', function(req, res) {

  var number = JSON.stringify(req.body);
  number = number.substring(8, number.lastIndexOf('"'));
  console.log(number);







});

app.listen(PORT);
console.log(PORT);
