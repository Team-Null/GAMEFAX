const axios = require('axios');
const ebayAPI= 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=AronHubb-gamefax-PRD-8820665a8-b817d790&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=1'
const categoryID= '139973';
/*const descriptionSearch= 'true';
const itemConditionName= 'Condition';
const itemConditionNumber= '1000';
const topSellerOnlyName= 'TopRatedSellerOnly';
const topSellerOnlyTrue= 'true';*/
const returnsAcceptedOnly= 'true';

//JSON object filled with information about the game being searched that's going to be sent to the frontend.
var ebayPayLoad ={
  "game_info": [
    {
      "title": '',
      "galleryURL": '',
      "viewItemURL": '',
      "currentPrice": ''
    }
  ]
}

//Performs the Ebay API call.
module.exports.getEbayData = function(gameName, callback){
  //Adds the game name into the API,finishes the rest of the API, and calls it.
  axios.get(ebayAPI,{
    params:{
      'keywords': gameName,
      'categoryId': categoryID,
      /*'descriptionSearch': descriptionSearch,
      'itemFilter(0).name': itemConditionName,
      'itemFilter(0).value': itemConditionNumber,
      'itemFilter(1).name': topSellerOnlyName,
      'itemFilter(1).value': topSellerOnlyTrue,*/
      'ReturnsAcceptedONly': returnsAcceptedOnly
    }
  })
  //Stores info about the game into the JSON object.
    .then(response=>{
      ebayPayLoad.game_info[0].title= response.data.findItemsAdvancedResponse[0].searchResult[0].item[0].title[0];
      ebayPayLoad.game_info[0].galleryURL= response.data.findItemsAdvancedResponse[0].searchResult[0].item[0].galleryURL[0];
      ebayPayLoad.game_info[0].viewItemURL= response.data.findItemsAdvancedResponse[0].searchResult[0].item[0].viewItemURL[0];
      ebayPayLoad.game_info[0].currentPrice= response.data.findItemsAdvancedResponse[0].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__;
      //console.log(ebayPayLoad.game_info[0]);
      // Returns JSON 
      callback(ebayPayLoad);

    })
    .catch(error => {
      console.log(error);
    })
}
