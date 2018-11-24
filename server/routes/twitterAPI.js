const twit = require('twit')
const twitterData = new twit({
    consumer_key: 'YFKWEBcGSDjRnGxlDf74JuOuH',
    consumer_secret: 'AFCUN2xXISYmMRI2VNqYbMeTKNdnNwcYHBc6AjdTFWRMxeyWmN',
    timeout_ms: 60 * 1000,
    app_only_auth: true
});

var twitterPayload;

module.exports.getTwitterData = async function(gameName, callback) {
    twitterPayload = {};
    twitterPayload["status"] = 0;
    twitterPayload["game"] = gameName;

    twitterData.get('search/tweets', {
        q: gameName,
        result_type: 'popular',
        lang: "en",
        count: 4
    }, function(err, data, res) {

        if(data.statuses.length != 0) {
            twitterPayload["data"] = data;
            twitterPayload["status"] = 1;
        }

        callback(twitterPayload);
    });
}
