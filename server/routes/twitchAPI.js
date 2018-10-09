const axios = require('axios');
const twitchGamesAPI = 'https://api.twitch.tv/helix/games';
const twitchStreamsAPI = 'https://api.twitch.tv/helix/streams';
const twitchUserAPI = 'https://api.twitch.tv/helix/users';
const clientID = 'yxkhooad1bbvkjb13ibi0hcv4hhlcu';

//Final JSON object to be sent back to the frontend
var twitchPayload;

//Function to handle HTTP Requests to Twitch's APIs
module.exports.getTwitchData = function(gameName, callback) {
    //Clear JSON object before each new game search
    twitchPayload = {};
    twitchPayload["status"] = 0;
    twitchPayload["gameInput"] = gameName;

    //HTTP Request to find Game ID from Game Name
    axios.get(twitchGamesAPI, {
        params: {
           'name': gameName 
        },
        headers: {
            'Client-ID': clientID
        }
    })
    .then(response => {
        //Throws error if game is not found in Twitch Database
        if(response.data.data.length == 0) {
            throw "Game not found.";
        }

        //Storing Game Name and Game ID in final JSON
        twitchPayload.status = 1;
        twitchPayload["game_name"] = response.data.data[0].name;
        twitchPayload["game_id"] = response.data.data[0].id;
    })
    .then(() => {
        //HTTP Request to find up to 5 Top Streams from Game ID
        axios.get(twitchStreamsAPI, {
            params: {
                'game_id': twitchPayload.game_id,
                'first': 5
             },
             headers: {
                 'Client-ID': clientID
             }     
        })
        .then(response2 => {
            //Throws error if no streams found for requested game
            if(response2.data.data.length == 0) {
                throw "No streams found.";
            }

            twitchPayload.status = 2;
            twitchPayload["streams"] = response2.data.data;
        })
        .then(() => {
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
            axios.all(promises).then(axios.spread((...responses) => {
                for(i = 0; i < twitchPayload.streams.length; i++) {
                    twitchPayload.streams[i]["display_name"] = responses[i].data.data[0].display_name;
                    twitchPayload.streams[i]["profile_image_url"] = responses[i].data.data[0].profile_image_url;
                }

                callback(twitchPayload);
            }))
        })
        .catch(error => {
            //No Streams Found Error
            console.log(error);
            callback(twitchPayload);
        });
    })
    .catch(error => {
        //No Games Found Error
        console.log(error);
        callback(twitchPayload);
    });
}