const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

// Variable used to route the /test url
const testPost = require('./server/routes/testPost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());

// Connects Node server to Angular Index
app.use(express.static(path.join(__dirname, 'dist')));

// Routes /test url to testPost.js
app.use('/test', testPost);

const port = 3000;

// Change to GAMEFAX domain later
app.listen(port, (req, res) => {
    console.log('Server running on port: ' + port);
});

// Redericts all pages to the dist index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});