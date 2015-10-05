
var net = require('net')

function zeroFill(i) {
  if (i<10) return '0'+i
  else return ''+i
}

function timeNow(){
  var d = new Date()
  return (zeroFill(d.getFullYear()) + '-'
  + zeroFill(d.getMonth()+1) + '-'
  + zeroFill(d.getDate())  + ' '
  + zeroFill(d.getHours())  + ':'
  + zeroFill(d.getMinutes()))

}

var server = net.createServer(function(socket) {
  socket.end(timeNow() + '\n')
})

server.listen(Number(process.argv[2]))
