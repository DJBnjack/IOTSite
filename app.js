// Get IOTHub services
var iothub = require('azure-iothub');
var connectionString = 'HostName=temperature-test.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=0V7f5WAGeeGjQjsg05iCYXaryOfpxfTobqrxqdvBrzk=';
var registry = iothub.Registry.fromConnectionString(connectionString);

// Load the http module to create an http server.
var http = require('http');
var port = process.env.PORT || 1337;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    registry.list(function (err, deviceList) {
        deviceList.forEach(function (device) {
            response.write(device.deviceId + ': ' + JSON.stringify(device, null, 2));
        });
    });
});

// Listen on port 80, IP defaults to 127.0.0.1
server.listen(port);