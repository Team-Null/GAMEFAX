const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// API file used to interact with external databases
const apiCollector = require('./server/routes/apiCollector');
app.use('/api', apiCollector);

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Send all Requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// Change to GAMEFAX domain later
const server = http.createServer(app);
app.listen(port, () => {
    console.log('Server running localhost:' + port);
});