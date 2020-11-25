const { RANKS, SUITS } =  require('./constant');

module.exports = class Card {

	constructor(rank, suit) {
		if(RANKS.includes(rank) && SUITS.includes(suit)) {
			this.rank = rank;
			this.suit = suit;
		} else {
			throw new Error('invalid card');
		}
	}
    /**
	 * Calculate card value
	 */
	getValue() {
		var value = 0;
		if (this.rank === 'A'){
			value = 11;
		} else if (this.rank === 'A'){
			value = 1;
		} else if (['J', 'Q', 'K'].includes(this.rank)){
			value = 10;
		} else {
			value = parseInt(this.rank);
		}
		return value;
	}

	/**
	 * Override to print card suit and rank
	 */
	toString() {
        return this.suit+this.rank;
    }
}