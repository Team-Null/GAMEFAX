const express = require('express');
const cors = require('cors');

const app = express();
// Tells the server to listen to incoming request on the specefied port
app.listen(8000, () => {console.log('Server started!');});


//test code
// example of call back method
app.route('/api/inputTest').get((req, res) => {
    res.send({
        test: [{item: 'One'}, {item: 'Two'}]
    });
});


app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{name: 'lilly'}, {name: 'lucy'}]
    });
});
//example parameter and return
app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({name: requestedCatName});
});
//example bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});
//example put
app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
});
//example delete
app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
});

var corsOptions = {
    origin: 'http://example.com',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))