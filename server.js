#!/usr/bin/env node

// xyos apps must be executable
// and carry this upper shebang! with them

/* Requires node.js libraries */
var http = require('http');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

// xyos apps can accept port through parameters like: --port <free port>
// no configuration needed
port = argv.port;
if(isNaN(port)) {
	console.log("Port \"%s\" is not a number.", port);
	process.kill(1);
} else {
	console.log("Listening on port %s", port);
}

http.createServer(function(request, response) {  
	// index.html is an user interface example
	// you can choose from any web app framework you want
	// or even not having a user interface is fine!
	fs.readFile('index.html', 'utf8', function (error, data) {
		if (error)
			return console.error(error);
		response.writeHeader(200, {"Content-Type": "text/html"});  
		response.write(data);  
		response.end();  
	});
}).listen(port);
