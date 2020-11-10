import Config from '../src/models/board'

// let Deck = new Config.deck.class({'cards': [46, 76, 754, 98, 6]})
let Board = new Config({'limit': 4, 'cards': [23, 87, 45, 73, 36]})

describe("Board", function() {
    describe("addCard", function() {
        it("Ajoute une carte à la fin de la liste des cartes déjà dans la main",function() {
            expect(Board.addCard(2)).toBe(true);
          });   
    });
    describe("removeCard", function() {
        it("Retire de la main la carte positionnée à l’index passé en paramètre",function() {
            expect(Board.removeCard(0)).toBeDefined();
          });   
    });
    describe("getAllCards", function() {
        it("Retourne un tableau contenant toutes les cartes de la main",function() {
            expect(Board.getAllCards()).toBeDefined();
          });   
    });
    describe("getCardsCount", function() {
        it("Retourne le nombre de carte actuellement dans la main",function() {
            expect(Board.getCardsCount()).toBeDefined();
          });   
    });
});