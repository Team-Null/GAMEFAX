// API Handling Class for https://jsonplaceholder.typicode.com/posts

const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com/posts';

// Export function that performs the API call
module.exports.getTestData = function(gameName) {
    //Console Log to make sure backend is receiving the name of the game.
    return axios.get(`${PostAPI}`)
}
