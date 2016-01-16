// Load the http module to create an http server.
var http = require('http');
var port = process.env.PORT || 1337;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 80, IP defaults to 127.0.0.1
server.listen(port);