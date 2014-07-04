var express = require('express')
  , fs = require('fs')
  , http = require('http');

var app = express();

app.engine('ejs', require('ejs-locals'));

app.configure('development', function(){

	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});



app.configure(function(){

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser('wigglybits'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));

  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

});

var server = app.listen(app.get('port'));
var io = require('socket.io').listen(server);

module.exports.app = app;
module.exports.io = io;
module.exports.fs = fs;

routes = require('./routes');

