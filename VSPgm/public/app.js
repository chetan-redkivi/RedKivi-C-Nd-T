var express = require('express')
  , routes = require('routes')
  , io = require('socket.io')
  , twitter = require('ntwitter')
  , util = require('util');

var xmpp = require('simple-xmpp');

var conn = new xmpp.SimpleXMPP();
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8081);
client = require('socket.io-client');
var socket = client.connect('http://localhost:8081');

function handler (req, res) {
  fs.readFile('./public/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}
         

twit = new twitter({
  consumer_key: 'sQOeEHhQdDmgDd1rpLVgmQ',
  consumer_secret: 'EGxBWHbo0U1MDHT85PUyURoMh8Ek2TKaep1ZN1nthtg',
  access_token_key: "285174464-NnZiH88kkUGKyQHtzL1TlF1ywouctXe1wHZj9Ip0",
  access_token_secret: "VY5WA4BrqTNttgKdwRvQZIqgffJnEFCZyN6oWNrTrq4"
});

io.sockets.on('connection', function(socket) {
  console.log("Chetan123");  
  console.log("Chetan124");  
  twit.stream('user',function(stream) {
			  console.log("Chetan125");  
    
				stream.on('data',function(data){
				console.log("Chetan126");  

        if(data.text != undefined){
				  console.log("Chetan127");  
          socket.emit('twitter',data.text.toString()); 
          console.log(data.text.toString());
        }

      });
    });
});


