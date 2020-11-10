import Config from '../src/models/deck'

let Deck = new Config({'cards': [46, 76, 754, 98, 6]})

describe("Deck", function() {
    describe("shuffles", function() {
        it("Mélange les cartes du paquet",function() {
            expect(Deck.shuffle()).toBe(true);
          });   
    });
    describe("draw", function() {
        it("Retourne la première carte du paquet et l’enlève du deck",function() {
            expect(Deck.draw()).toBeDefined();
          });   
    });
    describe("getCardsCount", function() {
        it("Retourne le nombre de cartes actuellement dans le deck",function() {
            expect(Deck.getCardsCount()).toEqual(4);
          });   
    });
});