const twit = require('twit')
const twitterData = new twit({
    consumer_key: 'YFKWEBcGSDjRnGxlDf74JuOuH',
    consumer_secret: 'AFCUN2xXISYmMRI2VNqYbMeTKNdnNwcYHBc6AjdTFWRMxeyWmN',
    timeout_ms: 60 * 1000,
    app_only_auth: true
});

module.exports.getTwitterData = async function(gameName, callback) {
    twitterData.get('search/tweets', {
        q: gameName,
        result_type: 'popular',
        lang: "en",
        count: 10
    }, function(err, data, res) {
        callback(data);
        //console.log(data);
    });
}
