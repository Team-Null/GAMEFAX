const axios = require('axios');
const twitchGamesAPI = 'https://api.twitch.tv/helix/games';
const twitchStreamsAPI = 'https://api.twitch.tv/helix/streams';
const twitchUserAPI = 'https://api.twitch.tv/helix/users';
const clientID = 'yxkhooad1bbvkjb13ibi0hcv4hhlcu';

//Final JSON object to be sent back to the frontend
var twitchPayload;

//Function to handle HTTP Requests to Twitch's APIs
module.exports.getTwitchData = async function(gameName, callback) {
    //Clear JSON object before each new game search
    twitchPayload = {};
    twitchPayload["status"] = 0;
    twitchPayload["gameInput"] = gameName;

    try {
        var gameResponse = await axios.get(twitchGamesAPI, {
            params: {
               'name': gameName 
            },
            headers: {
                'Client-ID': clientID
            }
        });

        //Throws error if game is not found in Twitch Database
        if(gameResponse.data.data.length == 0) {
            throw "Game not found.";
        }

        //Storing Game Name and Game ID in final JSON
        twitchPayload.status = 1;
        twitchPayload["game_name"] = gameResponse.data.data[0].name;
        twitchPayload["game_id"] = gameResponse.data.data[0].id;
    } 
    catch(error) {
        //No Games Found Error
        console.log(error);
        callback(twitchPayload);
    }

    try {
        var streamResponse = await axios.get(twitchStreamsAPI, {
            params: {
                'game_id': twitchPayload.game_id,
                'first': 5
             },
             headers: {
                 'Client-ID': clientID
             }     
        });

        //Throws error if no streams found for requested game
        if(streamResponse.data.data.length == 0) {
            throw "No streams found.";
        }

        twitchPayload.status = 2;
        twitchPayload["streams"] = streamResponse.data.data;
        for(i = 0; i < twitchPayload.streams.length; i++) {
            twitchPayload.streams[i].thumbnail_url = twitchPayload.streams[i].thumbnail_url.slice(0, -20) + '300x169.jpg'
        }
    } 
    catch(error) {
        //No Streams Found Error
        console.log(error);
        callback(twitchPayload);
    }

    //Create variable amount of GET requests for each stream in the array and store in promises[]
    promises = [];
    for(i = 0; i < twitchPayload.streams.length; i++) {
        promises.push(axios.get(twitchUserAPI, {
            params: {
                'id': twitchPayload.streams[i].user_id
            },
            headers: {
                'Client-ID': clientID
            }
        }));
    }

    //Iterate over each promise and store respective data in final JSON
    axios.all(promises).then(axios.spread((...userResponses) => {
        for(i = 0; i < twitchPayload.streams.length; i++) {
            twitchPayload.streams[i]["display_name"] = userResponses[i].data.data[0].display_name;
            twitchPayload.streams[i]["profile_image_url"] = userResponses[i].data.data[0].profile_image_url;
        }
        callback(twitchPayload);
    }));
}