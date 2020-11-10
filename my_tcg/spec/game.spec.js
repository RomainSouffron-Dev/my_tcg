import Config from '../src/models/game'

// let Deck = new Config.deck.class(JSON.parse(Config.deck.param))
let Game = new Config({
    "up": "player1",
    "down": "player2",
})

describe("Game", function() {
    describe("getTurn", function() {
        it("Retourne une chaine qui indique le tour en cours up ou down",function() {
            expect(Game.getTurn()).toEqual('up');
          });   
    });
    describe("changeTurn", function() {
        it("Change le tour courant et retourne le nouveau tour up ou down",function() {
            expect(Game.getTurn()).toEqual('up');
            expect(Game.changeTurn()).toEqual("player2");
            expect(Game.getTurn()).toEqual('down');
            expect(Game.changeTurn()).toEqual("player1");

          });   
    });
    describe("proxy", function() {
        it("Crée une action dans le jeu",function() {
            expect(Game.proxy('up', 'changeTurn', '')).toEqual('up.changeTurn()');
          });   
    });
});