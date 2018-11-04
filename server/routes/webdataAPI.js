const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.metacritic.com/search/game/'
const urlEnd = '/results';



module.exports.getWebdataData = async function(gameName, callback) {
    var options = {
        uri: url + gameName.split(" ").join("%20") + urlEnd,
        transform: function(body) {
            return cheerio.load(body);
        }
    }
    rp(options).then($ => {
        console.log("TEST");
        console.log($("span[id='metascore_w medium game positive']").text());
        callback(($("span[id='metascore_w medium game positive']").text()));
    }).catch(err => {
        console.log(err);
    })


}

