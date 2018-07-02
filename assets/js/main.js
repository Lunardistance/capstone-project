// let lyft = require('node-lyft')
// import lyft from 'node-lyft';

var url = "https://api.lyft.com/oauth/token";
var client_id = "oH_eemG0f2es";
var client_secret = "gt6XenVabMRWploHHE08WCFx6XNCOpa9";
var lyft = 
 

axios.request({
  url: url,
  method: "post",
  baseURL: "https://api.lyft.com/",
  auth: {
    username: client_id,
    password: client_secret
  },
  data: {
    "grant_type": "client_credentials",
    "scope": "public"    
  }
}).then(function(res) {
  console.log(res.data);  
});

import lyft from 'node-lyft';
let defaultClient = lyft.ApiClient.instance;

// Configure OAuth2 access token for authorization: User Authentication
let userAuth = defaultClient.authentications['User Authentication'];
userAuth.accessToken = res.data.access_token;

let apiInstance = new lyft.UserApi();

let request = new lyft.Ride('lyft', new lyft.Location(37.77663, -122.39227));
request.destination = new lyft.Location(37.771, -122.39123);

apiInstance.newRide(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
