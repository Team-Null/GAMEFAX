const rp = require('request-promise');
const cheerio = require('cheerio');
const wikiUrl = 'https://en.wikipedia.org/wiki/';

var webdata = [];
var scores = [];
var info = [];
var description;
var i = 0;

module.exports.getWebdata = async function(gameName, callback) {
    var options = {
        uri: wikiUrl + gameName.split(" ").join("_"),
        transform: function(body) {
            return cheerio.load(body);
        }
    }
    
    rp(options).then($ => {
        $('sup').remove();
        console.log($("div[class='mw-parser-output'] > :nth-child(3)").text() + "<<<<<<<<<<<");
        description = $("div[class='mw-parser-output'] > :nth-child(3)").text();
        
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
        $("table[class='infobox wikitable'] > tbody > tr").toArray().map(item => {
            $('sup').remove();
            $('th').remove();
            var value = $(item).text();
            if(value !== "" && /[0-9]/g.test(value)) {
                scores[i] = value.replace(/[^0-9/.](?=[0-9/.])/g, "$& ");
                i++;
            }
        });
        $('table').remove();
        description = $("div[class='mw-parser-output'] > :nth-child(4)").text();
        
        webdata[0] = scores;
        webdata[1] = info;
        webdata[2] = description;
        console.log(webdata[2]);
        callback(webdata);
    }).catch(err => {
        console.log(err);
    });
    scores = [];
    info = [];
    i = 0;
}
