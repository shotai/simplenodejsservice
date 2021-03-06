var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan')

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
}

//app.use(allowCrossDomain);


app.get('/', function(req, res, next) {
    	res.render('index.html')
});

app.get('/getRequest1',function(req, res, next){
	console.log("get request1")
	res.send('get request1 request ip: ' + req.ip +" Request header: "+ req.rawHeaders)
});

app.get('/getRequest2',function(req, res, next){
	console.log("get request2")
	res.send('get request2 request ip: ' + req.ip +" Request header: "+ req.rawHeaders)
});

app.get('/getRequestWin',function(req, res, next){
	console.log("Windows get request")
	res.send('Windows get request: request ip: ' + req.ip +" Request header: "+ req.rawHeaders)
});

var httpListener = http.createServer(app);
httpListener.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
