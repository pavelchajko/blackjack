const fs = require('fs');
const Deck =  require('./deck');
const Player =  require('./player');
const args = require('minimist')(process.argv.slice(2));

module.exports = class Game {
  /**
   * Function used to initialise the game deck and shuffle. 
   */
  init() {
		const path = args.f;
		if (!path) {
			Deck.init();
			Deck.shuffle();
		} else {
			const content = fs.readFileSync(path, 'utf8');
			Deck.loadFromData(content);
		}
	}
	/**
	 * Start of the game also draw 2-2 initial card for each player
	 */
	start() {
		this.player = new Player('Sam');
		this.dealer = new Player('Dealer');
		this.player.draw(Deck.deck.shift());
		this.dealer.draw(Deck.deck.shift());
		this.player.draw(Deck.deck.shift());
		this.dealer.draw(Deck.deck.shift());
		const winner = this.startGameAndReturnWinner()
		return winner;
	}

	output(winner) {
		console.log(winner.name);
		console.log(this.player.toString());
		console.log(this.dealer.toString());
	}
    /** 
	 * Main game function that take care of all the rules, and return winner
	 */
	startGameAndReturnWinner() {
    const { player, dealer } = this;
		const playerIntialScore = player.getScore();
		const dealerIntialScore = dealer.getScore();

		if(playerIntialScore === 21 && dealerIntialScore !== 21 ) {
			return player;
		}
		if (playerIntialScore !== 21 && dealerIntialScore === 21 ) {
			return dealer
		}
		if (playerIntialScore === 21 && dealerIntialScore === 21 ) {
			return player
		}
		if(playerIntialScore === 22 && dealerIntialScore === 22 ) {
			return dealer;
		}
	
		while(player.getScore() < 17) {
			player.draw(Deck.deck.shift());
		}
	
		const playerScore = player.getScore();
	
		if (player.getScore() > 21) {
			return dealer
		}
		
		while(dealer.getScore() <= playerScore ) {
			dealer.draw(Deck.deck.shift());
		}
	
		const dealerScore = dealer.getScore();
	
		if(dealerScore > 21) {
			return player;
		}
		if(playerScore > dealerScore ) {
			return player;
		}
		if(dealerScore > playerScore ) {
			return dealer;
		}
		if (playerScore === dealerScore) {
			return player;
		}
	}
}