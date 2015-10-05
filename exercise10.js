
var http = require('http')
var fs = require('fs')


function onRequest (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(response)
}

var server = http.createServer(onRequest)

server.listen(process.argv[2])
