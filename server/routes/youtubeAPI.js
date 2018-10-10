const axios = require('axios');
const youtubeSearchAPI = 'https://www.googleapis.com/youtube/v3/search';
const authKey = 'AIzaSyDyYq5fBdiRnyyuTs7uFpQugs0mV9ZUgQY';

var youtubePayload;

module.exports.getYoutubeData = async function(gameName, callback) {
    youtubePayload = {};
    youtubePayload['status'] = 0;
    youtubePayload['gameInput'] = gameName;
    var query = gameName + ' Review';

    try {
        var videoResponse = await axios.get(youtubeSearchAPI, {
            params: {
                'type': 'video',
                'q': query,
                'maxResults': 5,
                'part': 'snippet',
                'relevanceLanguage': 'en',
                'regionCode': 'US',
                'key': authKey
            }
        });

        if(videoResponse.data.pageInfo.totalResults == 0) {
            throw "No videos found.";
        }

        youtubePayload.status = 1;
        youtubePayload['items'] = videoResponse.data.items;

        callback(youtubePayload);
    } 
    catch(error) {
        //No Videos Found Error
        console.log(error);
        callback(youtubePayload);
    }
}