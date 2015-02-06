var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function (con){
	console.log("A new connection is established");
	con.sendText("Your request for a connection is accepted");

	con.on("text", function(msg){
		console.log(msg , "[message from client]");
		for(var i=0;i<server.connections.length;i++)
			server.connections[i].sendText(msg);
	});
});
server.listen(9090);
console.log("node server running on port 9090");