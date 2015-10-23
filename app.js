var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan')

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.get('/', function(req, res) {
    	res.render('index.html')
});

app.get('/getRequest1',function(req, res){
	console.log("get request1")
	res.send('get request1 from ' + req.rawHeaders)
});

app.get('/getRequest2',function(req, res){
	console.log("get request2")
	res.send('get request2 from ' + req.rawHeaders)
});

app.get('/getRequestWin',function(req, res){
	console.log("Windows get request")
	res.send('Windows get request: ' + req.rawHeaders)
});

var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
