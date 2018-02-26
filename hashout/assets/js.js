var firstTime = true;
const container = document.getElementById('body');
$(document).ready(function(){  
    var socket = io.connect("http://diego.sarzi.com.br:3000");
    var ready = false;

    $("#submit").submit(function(e) {
		e.preventDefault();
		$("#nick").fadeOut();
		$("#chat").fadeIn();
		var name = $("#nickname").val();
		var time = new Date();
		$("#name").html(name);
		$("#time").html('First login: ' + time.getHours() + ':' + time.getMinutes());

		ready = true;
		socket.emit("join", name);

	});

	$("#textarea").keypress(function(e){
        if(e.which == 13) {
        	var text = $("#textarea").val();
        	$("#textarea").val('');
        	var time = new Date();
        	$(".chat").append('<li class="self"><div class="msg"><span>' + $("#nickname").val() + ':</span><p>' + text + '</p><time>' + time.getHours() + ':' + time.getMinutes() + '</time></div></li>');
        	socket.emit("send", text);
            document.documentElement.scrollTop = container.scrollHeight;
        }
    });


    socket.on("update", function(msg) {
    	if (ready) {
    		$('.chat').append('<li class="info">' + msg + '</li>')
    	}
    }); 

    socket.on("chat", function(client,msg) {
    	if (ready) {
	    	var time = new Date();
	    	$(".chat").append('<li class="other"><div class="msg"><span><strong>' + client + ':</strong></span><p>' + msg + '</p><time>' + time.getHours() + ':' + time.getMinutes() + '</time></div></li>');
    	   document.documentElement.scrollTop = container.scrollHeight;
        }


    });
});     
