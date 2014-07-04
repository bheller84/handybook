app = module.parent.exports.app;
fs = module.parent.exports.fs;
socket = module.parent.exports.io;

var ticTacToeController = require('./controllers/ticTacToe');

app.get('/', ticTacToeController.index);

