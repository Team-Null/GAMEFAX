/* Main class dedicated to calling the API Handling Classes
 Receives the return from each handler class and parses the data to json
 The json data is then returned to the front end */

const express = require('express');
const router = express.Router();
app = express();

// Import respective API handling classes
var twitchAPI = require('./twitchAPI');
var youtubeAPI = require('./youtubeAPI');
var ebayAPI= require('./ebayAPI');
var walmartAPI= require('./walmartAPI');
var redditAPI= require('./redditAPI');
var twitterAPI = require('./twitterAPI');
var webdataAPI = require('./webdataAPI');
var wallpaperAPI = require('./wallpaperAPI');

// Method for each respective API call
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

router.get('/walmart/:game', (req, res) => {
  walmartAPI.getWalmartData(req.params.game, response => {
    res.json(response);
  });
})

router.get('/reddit/:game', (req, res) => {
  redditAPI.getRedditData(req.params.game, response => {
    res.json(response);
  });
})

router.get('/twitter/:game', (req, res) => {
  twitterAPI.getTwitterData(req.params.game, response => {
    res.json(response);
  })
})

router.get('/webdata/:game', (req, res) => {
  webdataAPI.getWebdata(req.params.game, response => {
    res.json(response);
  })
})

router.get('/wallpaper/:game', (req, res) => {
  wallpaperAPI.getGameWallpaper(req.params.game, response => {
    res.json(response);
  })
})

module.exports = router;
