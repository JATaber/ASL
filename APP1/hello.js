//var http = require("http");

express = require('express');
var app = express();

app.get("/", function(request, response){

    response.end("Hello");
});


app.listen(80, function(){

    console.log("Everything is fine and server is running");
});

/*
var server = http.createServer(function(request, response){

    response.writeHead(200, {"Content-Type": "text/plain"});

    response.end("Hello");
});


server.listen(80);

console.log("Everything is fine and server is running");
*/