const Game = require('./game')

const game = new Game(); 
game.init();
const winner = game.start();
game.output(winner);