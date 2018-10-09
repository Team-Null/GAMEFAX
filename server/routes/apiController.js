/* Main class dedicated to calling the API Handling Classes
 Receives the return from each handler class and parses the data to json
 The json data is then returned to the front end */

const express = require('express');
const router = express.Router();
app = express();

// Import respective API handling classes
var testAPI = require('./testAPI');
var twitchAPI = require('./twitchAPI');
var youtubeAPI = require('./youtubeAPI');
var ebayAPI= require('./ebayAPI');

// Method for each respective API call
router.get('/test/:game', (req, res) => { 
    testAPI.getTestData(req.params.game).then(response => {
        res.status(200).json(response.data);
    })

    .catch(error => {
        console.log(error);
    })
})

router.get('/twitch/:game', (req, res) => { 
    twitchAPI.getTwitchData(req.params.game, response => {
        res.json(response);
    });
})

router.get('/youtube/:game', (req, res) => { 
    youtubeAPI.getYoutubeData(req.params.game, response => {
        res.json(response);
    });
})

router.get('/ebay/:game', (req, res) => {
  ebayAPI.getEbayData(req.params.game, response => {
    res.json(response);
  });
})

module.exports = router;
