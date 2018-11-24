const axios = require('axios');
const alphaCodersAPI = 'https://wall.alphacoders.com/api2.0/get.php';
const apiKey = '2c37a019b841659379bc0de943dbc0af';

var wallpaperPayload;

module.exports.getGameWallpaper = async function(gameName, callback) {

  wallpaperPayload = {};

  try {
    var images = await axios.get(alphaCodersAPI, {
      params: {
          'auth': apiKey,
          'method': "search",
          'term': gameName
      }
    });

    if(images.length == 0) {
        throw "Wallpapers not found.";
    }

    wallpaperPayload["url"] = images.data.wallpapers[0].url_image;
    callback(wallpaperPayload);
  } 
  catch(error) {
    console.log(error);
    callback(wallpaperPayload);
  }
}