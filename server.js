const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());

const port = 3000;

// Change to GAMEFAX domain later
app.listen(port, () => {
    console.log('Server running on port: ' + port);
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use('/', router);

/* Access control
app.use(function(req, res, next) {
  // Change to domain name later
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Test server calls
app.post('/', function(req, res) {
  console.log('POST request received');
  res.end();
})*/
