import Config from '../src/models/player'
import Deck from '../src/models/deck';
import Hand from '../src/models/hand';
import Board from '../src/models/board';
import Cemetary from '../src/models/cemetary';
let Player1 = new Config({
    "type": 'deck',
    "deck": new Deck({"cards": [46, 76, 754, 98, 6]}),
    "hand": new Hand({"cards": [2, 20, 12]}),
    "board": new Board({"cards": [2]}),
    "cemetary": new Cemetary({"cards": [1000, 706, 154, 798, 463]})
})
let Player = new Config({
    "type": 'deck',
    "deck": new Deck({"cards": [46, 76, 754, 98, 6]}),
    "hand": new Hand({"cards": [Player1, 20, 12]}),
    "board": new Board({"cards": [Player1]}),
    "cemetary": new Cemetary({"cards": [1000, 706, 154, 798, 463]})
})

describe("Player", function() {
    describe("shuffles", function() {
        it("Mélange les cartes du paquet",function() {
            expect(Player.shuffle('cemetary')).toBe(true);
            expect(Player.shuffle('deck')).toBe(true);
          });   
    });
    describe("draw", function() {
        it("Retourne la première carte du paquet et l’enlève du deck",function() {
            expect(Player.draw()).toBeDefined(true);
            // console.log(Player.draw())
          });   
    });
    describe("playCard", function() {
        it("Retire la carte, à la position indiquée en paramètre, de la main du joueur et l’ajoute à son board",function() {
            expect(Player.playCard()).toBe(true);
          });   
    });
    describe("discard", function() {
        it("Retire la carte, à la position indiquée en paramètre, de la main du jour et l’ajoute à son cemetary",function() {
            expect(Player.discard()).toBe(true);
          });   
    });
    describe("attack", function() {
        it("Déclenche une attaque avec la carte du board désignée par le premier paramètre, et cible l’adversaire passée en second paramètre",function() {
            expect(Player.attack(0, Player1)).toBe(true);
            // console.log(Player1)
          });   
    });
});