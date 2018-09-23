const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com/users';

module.exports.getTwitchData = function() {
    return axios.get(`${PostAPI}`)
}
