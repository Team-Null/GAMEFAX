const axios = require('axios');
const twitchGamesAPI = 'https://api.twitch.tv/helix/games';
const twitchStreamsAPI = 'https://api.twitch.tv/helix/streams';
const twitchUserAPI = 'https://api.twitch.tv/helix/users';
const clientID = 'yxkhooad1bbvkjb13ibi0hcv4hhlcu';

//Final JSON object to be sent back to the frontend
var twitchPayload = {
    "game_name": '',
    "game_id": '',
    "streams": [
        {
            "user_id": '',
            "display_name": '',
            "title": '',
            "viewer_count": '',
            "thumbnail_url": '',
            "profile_image_url": ''
        },
        {
            "user_id": '',
            "display_name": '',
            "title": '',
            "viewer_count": '',
            "thumbnail_url": '',
            "profile_image_url": ''
        },
        {
            "user_id": '',
            "display_name": '',
            "title": '',
            "viewer_count": '',
            "thumbnail_url": '',
            "profile_image_url": ''
        },
        {
            "user_id": '',
            "display_name": '',
            "title": '',
            "viewer_count": '',
            "thumbnail_url": '',
            "profile_image_url": ''
        },
        {
            "user_id": '',
            "display_name": '',
            "title": '',
            "viewer_count": '',
            "thumbnail_url": '',
            "profile_image_url": ''
        }
    ]
}

//Function to handle HTTP Requests to Twitch's APIs
module.exports.getTwitchData = function(gameName, callback) {
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
        //Storing Game Name and Game ID in final JSON
        twitchPayload.game_name = response.data.data[0].name;
        twitchPayload.game_id = response.data.data[0].id;
    })
    .catch(error => {
        console.log(error);
    })
    .then(() => {
        //HTTP Request to find Top Streams from Game ID
        axios.get(twitchStreamsAPI, {
            params: {
                'game_id': twitchPayload.game_id
             },
             headers: {
                 'Client-ID': clientID
             }     
        })
        .then(response2 => {
            //Populating final JSON with top 5 stream's information
            for(i = 0; i < 5; i++) {
                twitchPayload.streams[i].user_id = response2.data.data[i].user_id;
                twitchPayload.streams[i].title = response2.data.data[i].title;
                twitchPayload.streams[i].viewer_count = response2.data.data[i].viewer_count;
                twitchPayload.streams[i].thumbnail_url = response2.data.data[i].thumbnail_url;
            }    
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            //5 simultaneous HTTP requests for each respective User ID to find Display Name and Profile Picture
            axios.all([
                axios.get(twitchUserAPI, {
                    params: {
                        'id': twitchPayload.streams[0].user_id
                     },
                     headers: {
                         'Client-ID': clientID
                     }
                }),
                axios.get(twitchUserAPI, {
                    params: {
                        'id': twitchPayload.streams[1].user_id 
                     },
                     headers: {
                         'Client-ID': clientID
                     }
                }),
                axios.get(twitchUserAPI, {
                    params: {
                        'id': twitchPayload.streams[2].user_id 
                     },
                     headers: {
                         'Client-ID': clientID
                     }
                }),
                axios.get(twitchUserAPI, {
                    params: {
                        'id': twitchPayload.streams[3].user_id 
                     },
                     headers: {
                         'Client-ID': clientID
                     }
                }),
                axios.get(twitchUserAPI, {
                    params: {
                        'id': twitchPayload.streams[4].user_id 
                     },
                     headers: {
                         'Client-ID': clientID
                     }
                })
            ])
            .then(axios.spread(function(user1Response, user2Reponse, user3Response, user4Response, user5response) {
                //Populating final JSON with respective data from each user
                twitchPayload.streams[0].display_name = user1Response.data.data[0].display_name;
                twitchPayload.streams[0].profile_image_url = user1Response.data.data[0].profile_image_url;
        
                twitchPayload.streams[1].display_name = user2Reponse.data.data[0].display_name;
                twitchPayload.streams[1].profile_image_url = user2Reponse.data.data[0].profile_image_url;
        
                twitchPayload.streams[2].display_name = user3Response.data.data[0].display_name;
                twitchPayload.streams[2].profile_image_url = user3Response.data.data[0].profile_image_url;
        
                twitchPayload.streams[3].display_name = user4Response.data.data[0].display_name;
                twitchPayload.streams[3].profile_image_url = user4Response.data.data[0].profile_image_url;
        
                twitchPayload.streams[4].display_name = user5response.data.data[0].display_name;
                twitchPayload.streams[4].profile_image_url = user5response.data.data[0].profile_image_url;

                //Callback function to return final JSON AFTER every HTTP request has been made
                callback(twitchPayload);
            }))
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });
    })
    .catch(error => {
        console.log(error);
    });
}
