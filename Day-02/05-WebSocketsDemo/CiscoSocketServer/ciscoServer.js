var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function (con){
	console.log("A new connection is established");
	con.sendText("Your request for a connection is accepted");

	con.on("text", function(msg){
		console.log(msg , "[message from client]");
		con.sendText("message recieved at " + new Date().toString());
	})
});
server.listen(9090);
console.log("node server running on port 9090");