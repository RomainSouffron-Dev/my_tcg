import Config from '../src/models/cemetary'

// let Deck = new Config.deck.class({'cards': [46, 76, 754, 98, 6]})
let Cemetary = new Config({'cards': [46, 76, 754, 98, 6]})

describe("Cemetary", function() {
    describe("shuffles", function() {
        it("Mélange les cartes du paquet",function() {
            // expect(Deck.shuffle().toBeTruthy();
            expect(Cemetary.shuffle()).toBe(true);
          });   
    });
    describe("draw", function() {
        it("Retourne la première carte du paquet et l’enlève du deck",function() {
            expect(Cemetary.draw()).toBeDefined();
          });   
    });
    describe("getCardsCount", function() {
        it("Retourne le nombre de cartes actuellement dans le deck",function() {
            expect(Cemetary.getCardsCount()).toBeDefined();
          });   
    });
});