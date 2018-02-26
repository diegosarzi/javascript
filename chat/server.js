var s = require("socket.io").listen(8080);
s.sockets.on("connection", start);

function start(user){
	user.on("msgUser", send);
}

function send(value){
	s.sockets.emmit("msgServer");
}