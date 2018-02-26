var request = require('request');
var keyApi = '43a336c821d5e8e79037e56e24941f97'

request('http://api.openweathermap.org/data/2.5/weather?id=6322305&APPID=' + keyApi, function(error, response, body){
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		console.log("Local = " + parsedData.name);
		console.log("Temperatura = " + parsedData.main.temp);
		console.log("Humidade = " + parsedData.main.humidity);
		console.log("Speed = " + parsedData.wind.speed);
	}
});