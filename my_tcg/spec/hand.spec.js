import Config from '../src/models/hand'
import Config1 from '../src/models/player'
import Deck from '../src/models/deck';
import Board from '../src/models/board';
import Cemetary from '../src/models/cemetary';


let player = new Config1({
    "life": 20,
    "strength": 5,
    "def": 3, 
    "type": 'deck',
    "deck": new Deck({"cards": [46, 76, 754, 98, 6]}),
    "hand": new Config({"cards": [10, 20, 12]}),
    "board": new Board({"cards": [player, player, player, player, player]}),
    "cemetary": new Cemetary({"cards": [1000, 706, 154, 798, 463]})
}) 
let Hand = new Config({'limit': 4, 'cards': [player, player, player, player, player]})

describe("Hand", function() {
    describe("addCard", function() {
        it("Ajoute une carte à la fin de la liste des cartes déjà dans la main",function() {
            expect(Hand.addCard(2)).toBe(true);
          });
    });
    describe("removeCard", function() {
        it("Retire de la main la carte positionnée à l’index passé en paramètre",function() {
            expect(Hand.removeCard(3)).toBeDefined();
          });
    });
    describe("getAllCards", function() {
        it("Retourne un tableau contenant toutes les cartes de la main",function() {
            expect(Hand.getAllCards()).toBeDefined();
          });
    });
    describe("getCardsCount", function() {
        it("Retourne le nombre de carte actuellement dans la main",function() {
            expect(Hand.getCardsCount()).toEqual(5);
            // console.log(Hand.getAllCards())
          });
    });
});