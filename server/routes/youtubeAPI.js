const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com/users';

var youtubePayload;

module.exports.getYoutubeData = function(gameName, callback) {
    youtubePayload = {};

    axios.get(`${PostAPI}`).then(response => {
        youtubePayload = response.data;
        callback(youtubePayload);
    })
    .catch(error => {
        console.log(error);
    });
}