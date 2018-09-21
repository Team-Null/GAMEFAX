const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());

// Change to server location later
app.listen(port, (req, res) => {
    console.log('Server running on port: ' + port);
})

// Access control
app.use(function(req, res, next) {
  // Change to domain name later
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Test server calls
app.get('/', function(req, res) {
  console.log('GET request received');
  // .end() should return JSON Object
  res.end();
});
app.post('/', function(req, res) {
  console.log('POST request received');
  res.end();
})
