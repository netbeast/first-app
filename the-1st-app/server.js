/* Requires node.js libraries */
var http = require('http');
var fs = require('fs');
var argv = require('optimist').argv; // must-have package
var colors = require('colors'); // just to make a colourful prompt

/* xbian apps need to accept the port to be launched by parameters */
port = argv.port;

if(isNaN(port)) {
	error = "Port \"" + port + "\" is not a number.";
	console.log(error.red);
	process.kill(1);
} else {
	success = "Listening on port " + port;
	console.log(success.green);
}


http.createServer(function(request, response) {  
	/* index.html is an user interface example */
	fs.readFile('index.html', 'utf8', function (error, data) {
		if (error) {
			return console.log(error.red);
		}
		response.writeHeader(200, {"Content-Type": "text/html"});  
		response.write(data);  
		response.end();  
	});

}).listen(port);
