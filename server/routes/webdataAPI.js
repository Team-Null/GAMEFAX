const rp = require('request-promise');
const cheerio = require('cheerio');
const wikiUrl = 'https://en.wikipedia.org/wiki/';

var webdata = [];
var scores = [];
var info = [];
var i = 0;

module.exports.getWebdata = async function(gameName, callback) {
    var options = {
        uri: wikiUrl + gameName.split(" ").join("_"),
        transform: function(body) {
            return cheerio.load(body);
        }
    }
    rp(options).then($ => {
        $("table[class='infobox hproduct'] > tbody > tr").toArray().map(item => {
            var value = $(item).text();
            if(value !== "" ) {
                if(value.includes("Developer(s)")) {
                    info[i] = value.replace(")", ") ");
                    i++;
                } else if(value.includes("Publisher(s)")) {
                    info[i] = value.replace(")", ") ");
                    i++;
                } else if(value.includes("Platform(s)")) {
                    info[i] = value.replace(")", ") ");
                    i++;
                } else if(value.includes("Release")) {
                    info[i] = value.replace("ase", "ase ");
                    i++;
                } else if(value.includes("Genre(s)")) {
                    info[i] = value.replace(")", ") ");
                    i++;  
                }
            }
        });
        i = 0;
        $('sup').remove();
        $('th').remove();
        $("table[class='infobox wikitable'] > tbody > tr").toArray().map(item => {
            var value = $(item).text();
            if(value !== "" && /[0-9]/g.test(value)) {
                scores[i] = value.replace(/[^0-9/.](?=[0-9/.])/g, "$& ");
                i++;
            }
        });
        webdata[0] = scores;
        webdata[1] = info;
        console.log("2D array: " + webdata[1][1])
        callback(webdata);
    }).catch(err => {
        console.log(err);
    })
    scores = [];
    info = [];
    i = 0;
}

