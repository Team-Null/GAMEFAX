// API Handling Class for https://jsonplaceholder.typicode.com/posts

const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com/posts';

// Export function that performs the API call
module.exports.getTestData = function() {
    return axios.get(`${PostAPI}`)
}
