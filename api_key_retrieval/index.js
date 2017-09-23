
var headlessAuth = require('headless-google-auth');
var authPromise = headlessAuth(require('./data'));

authPromise.then(function(client, tokens){
  console.log(client, tokens);
});
