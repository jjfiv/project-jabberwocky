const http = require('http');
const port = 1234;

var startTime = (new Date()).getTime();
console.log('START-TIME: '+startTime)

if(port == 1234) {
  console.log("PORT NOT CORRECTLY SET FOR USER.");
  process.exit();
}

var server = http.createServer( (request, response) => {
  var currentTime = (new Date()).getTime();
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World</h1><ul><li>'+port+'</li><li>'+startTime+'</li><li>'+currentTime+'</li></ul>');
}).listen(port);

function shutdown() {
  server.close();
  console.log('SIGINT received, shutting down '+port);
  console.log('END-TIME: '+(new Date()).getTime());
  process.exit();
}

process.on('SIGINT', shutdown);
