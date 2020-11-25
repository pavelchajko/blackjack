module.exports = class Player {

	constructor(name) {
		this.name = name;
		this.hand = [];
	}
	
	draw(card){
		this.hand.push(card);
	}

	/*
	* Calculate currenct score of the player/dealer
	*/
	getScore(){
		var points = 0;
		for(var i = 0; i < this.hand.length; i++){
			points += this.hand[i].getValue();
		}
		return points;
	}
	/*
	* Update toString to display result as per the requirment
	* e.g  Sam: SA, D2, SQ
	*/
	toString() {
		return `${this.name}: ${ this.hand.join(', ')}`
	}
}