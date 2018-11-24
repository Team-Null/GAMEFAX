const GoogleImages = require('google-images');
const client = new GoogleImages('016298205089907193700:hlpjlqvg6dk', 'AIzaSyDxSZhdetEKtyR7WktMBYX-8M01QTJr0N8');

var wallpaperPayload;

module.exports.getGameWallpaper = async function(gameName, callback) {

  wallpaperPayload = {};

  try {
    var images = await client.search(gameName + " wallpaper 4k", {type: 'photo'});

    if(images.length == 0) {
        throw "Wallpapers not found.";
    }

    wallpaperPayload["url"] = images[0].url;
    console.log(wallpaperPayload.url);
    callback(wallpaperPayload);
  } 
  catch(error) {
    console.log(error);
    callback(wallpaperPayload);
  }
}