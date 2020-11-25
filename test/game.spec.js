var assert = require('assert');
const Deck = require('../game/deck');
const Game = require('../game');

describe('Game', () => {
  describe('Check if either player has blackjack in start', () => {
    it('should return Sam as winner when deck is [SA, CJ, CQ, D2]', () => {
      Deck.loadFromData('SA, CJ, CQ, D2');
      const game = new Game();
      const winner = game.start();
      assert.equal(winner.name, 'Sam');
    });
    it('should return Dealer as winner when deck is [CJ, SA, D2, CQ]', () => {
      Deck.loadFromData('CJ, SA, D2, CQ');
      const game = new Game();
      const winner = game.start();
      assert.equal(winner.name, 'Dealer');
    });
  });
  describe('Dealer wins when both players starts with 22', () => {
    it('should return Dealer as winner when deck is [SA, HA, CA, DA]', () => {
      Deck.loadFromData('SA, HA, CA, DA');
      const game = new Game();
      const winner = game.start();
      assert.equal(winner.name, 'Dealer');
    });
  });
  describe('Sam wins when both players starts with 21', () => {
    it('should return delear as winner when deck is [SA, CA, HQ, DJ]', () => {
      Deck.loadFromData('SA, CA, HQ, DJ');
      const game = new Game();
      const winner = game.start();
      assert.equal(winner.name, 'Sam');
    });
  });
  describe('draw new cards after start', () => {
    const game = new Game();
    it('should return Sam as winner when deck is [CA, D5, H9, HQ, S8,]', () => {
      Deck.loadFromData('CA, D5, H9, HQ, S8,');
      const winner = game.start();
      assert.equal(winner.name, 'Sam');
    });
  });
});
