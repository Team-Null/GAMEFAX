const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com/users';

module.exports.getTwitchData = function(gameName) {
    return axios.get(`${PostAPI}`)
}
