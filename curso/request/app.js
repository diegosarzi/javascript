var request = require('request');
request('http://frutodagua.com.br', function(error, response, body){
	if(error){
		console.log("ERRORRR");
		console.log(error);
	} else {
		if(response.statusCode == 200){
		console.log(response);
		}
	}
});