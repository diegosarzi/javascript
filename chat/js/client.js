$(document).on("ready", start);

var ws = io.connect("http://localhost:9090");

function start(){
	ws.on("msgServer", receive);
	$("#send").on("click", send);
}


function receive(){
	console.log(values);
}

function send(){
	var values = {
		'text' : $("#msg").val();
	}

	ws.emmit("msgUser", values);
	$("#msg").val('');
}