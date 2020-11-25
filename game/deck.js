const Card =  require('./card');
const { RANKS, SUITS } =  require('./constant');

class Deck {
	static instance;
	constructor() {
		this.deck = [];
	}
	/**
	 * Fills up the deck array with cards
	 */
	init() {
		this.deck.splice(0);
		for(var s = 3; s >= 0; s--){
			for(var r = 12; r >= 0; r--){
				this.deck.push(new Card(RANKS[r], SUITS[s]));
			}
		}
	}

	/**
	 * Fills up the deck array with cards from a string content
	 */
	loadFromData(content) {
		this.deck.splice(0);
		const deckData = content.replace(/\s/g,'').split(',').filter(val => val);
		deckData.map((cardStr) => {
			const rank = cardStr.slice(1);
			const suit =  cardStr.slice(0,1);
			this.deck.push(new Card(rank, suit));
		});
	}
	
	/*
     * Shuffles the cards
	 */
	shuffle() {
		var j, x, i;
		for (i = this.deck.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = this.deck[i - 1];
			this.deck[i - 1] = this.deck[j];
			this.deck[j] = x;
		}
	}
}

// Creating Singleton object
const instance = new Deck();
Object.freeze(instance);

module.exports = instance;