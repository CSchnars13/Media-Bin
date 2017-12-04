
var request = require('request'); // "Request" library

export default function(){
var client_id = '0ecfdfec604944a89010d58a76ff1e2e'; // Your client id
var client_secret = '157ffc20849e4e32afcfa7c351fb4113'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
        url: 'https://api.spotify.com/v1/search',
        qs: {
          q: 'birds+in+the+trap+sing+mcknight',
          type: 'album'
        },

        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };

      console.log(options);

    request.get(options, function(error, response, body) {
      console.log(body);
      console.log(body.albums.items[0]);
    });
  }
});
}