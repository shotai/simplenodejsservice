var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan')

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.get('/getRequest1',function(req, res){
	console.log("get request1")
	res.send('get request1 from ' + req.headers.host)
});

app.get('/getRequest2',function(req, res){
	console.log("get request2")
	res.send('get request2 from ' + req.headers.host)
});

var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
