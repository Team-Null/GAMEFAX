const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors())

// Access controll
app.use(function(req, res, next) {
  // Change to domain name later
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Test server calls
app.get('/', function(req, res) {
  console.log('GET request recieved');
  // .end() should return JSON Object
  res.end();
});
app.post('/', function(req, res) {
  console.log('POST request recieved');
  res.end();
})

// Change to server location later
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})