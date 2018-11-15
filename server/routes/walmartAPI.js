const axios = require('axios');
const walmartAPI= 'http://api.walmartlabs.com/v1/search?';
const format= 'json';
const categoryId= '2636_7899038';
const numItems= '1';
const apiKey= 'ebja9pfznmggge3h5ume33bz';

//JSON object filled with information about the game being searched that's going to be sent to the frontend.
var walmartPayLoad={
  "game_info":[
    {
      "name": '',
      "thumbnailImage": '',
      "productUrl": '',
      "salePrice": ''
    }
  ]
}

//Performs the Walmart API call.
module.exports.getWalmartData = function(gameName, callback){
  //Adds the game name into the API,finishes the rest of the API, and calls it.
  axios.get(walmartAPI,{
    params:{
      'query': gameName,
      'format': format,
      'categoryId': categoryId,
      'numItems': numItems,
      'apiKey': apiKey,
    }
  })
  //Stores info about the game into the JSON object.
    .then(response=>{
      walmartPayLoad.game_info[0].name= response.data.items[0].name;
      walmartPayLoad.game_info[0].thumbnailImage= response.data.items[0].thumbnailImage;
      walmartPayLoad.game_info[0].productUrl= response.data.items[0].productUrl;
      walmartPayLoad.game_info[0].salePrice= response.data.items[0].salePrice;
      //Lets me make sure the info I'm requesting is actually what I want.
      //console.log(walmartPayLoad.game_info[0]);
      // Returns JSON
      callback(walmartPayLoad);
    })
    .catch(error=> {
      console.log(error);
    })
}
