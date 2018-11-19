const axios= require('axios');
const userAgent= 'user_agent';
const clientId= 'xH-N0iv78ggTEw';
const clientSecret= 'j6FPrOb0I3CVzi3xrls4m6x5D60';
const refreshToken= '11790588-4N9xbAJaspuVZ7O_jcv-LsbAIOQ';
const redditReviewAPI= 'https://www.reddit.com/r/Games/search.json';
const redditSubAPI='https://www.reddit.com/subreddits/search.json';

var redditPayLoad;

module.exports.getRedditData= async function(gameName, callback){

  redditPayLoad= {};
  redditPayLoad['status']= 0;
  redditPayLoad['input']= gameName;
  var searchQ= gameName+ ' Review';
  var subQ= gameName;

  try{
    var redditSearchResponse= await axios.get(redditReviewAPI,{
      params: {
        'q': searchQ,
        'limit': 1,
        'sort': 'relevance',
        't': 'all',
        'restrict_sr': 1
      }
    });

    redditPayLoad.status= 1;
    redditPayLoad['data']= redditSearchResponse.data.data.children;
  }
  catch(error){
    console.log(error);
    callback(redditPayLoad);
  }

  try{
    var redditSubResponse= await axios.get(redditSubAPI,{
      params: {
        'q': subQ,
        'limit': 1,
        'sort': 'relevance'
      }
    });

    redditPayLoad.status= 2;
    redditPayLoad['sub']= redditSubResponse.data.data.children;
    callback(redditPayLoad);
  }
  catch(error){
    console.log(error);
    callback(redditPayLoad);
  }
}
