var twitter = require('ntwitter'),
	util = require('util');
 
// Twitter Setup
module.exports.twit = new twitter({
  consumer_key: 'consumer key',
  consumer_secret: 'consumer secret',
  access_token_key: 'access token',
  access_token_secret: 'access token secret'
});
