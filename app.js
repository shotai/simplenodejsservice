var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan')

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.get('/getRequest',function(req, res){
	console.log("get request")
	res.send('get request from ' + req.headers.host)
});

var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
