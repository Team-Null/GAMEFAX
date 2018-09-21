const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();
const testPost = require('./server/routes/testPost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/test', testPost);

const port = 3000;

// Change to GAMEFAX domain later
app.listen(port, (req, res) => {
    console.log('Server running on port: ' + port);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});