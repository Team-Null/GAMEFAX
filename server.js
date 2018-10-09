const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// API file used to interact with external databases
const apiController = require('./server/routes/apiController');
app.use('/api', apiController);

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Send all Requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/home', function(req, res, next) {
  // Handle the get for this route
  console.log("test");
});

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// Change to GAMEFAX domain later
const server = http.createServer(app);
app.listen(port, () => {
    console.log('Server running localhost:' + port);
});