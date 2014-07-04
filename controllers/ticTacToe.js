var players;


exports.index = function(req, res){

        var gameJs = fs.readFileSync('./public/javascripts/game.js');

	players = [];
	socket.configure(function(){
		socket.set('transports', ['xhr-polling']);
		socket.set('polling duration', 10);
	});

	socket.sockets.on('connection', socketConnected);	

	res.render('index');
};

function socketConnected(client){
	client.on('disconnect', clientDisconnected);
	client.on('new player', newPlayer);
	client.on('player moved', playerMoved);
}

function clientDisconnected(data){
	console.log(data);
}

function newPlayer(data){
	console.log(data);
}

function playerMoved(data){
	console.log(data);
}


