import Config from '../src/models/pawn'

// let Deck = new Config.deck.class(JSON.parse(Config.deck.param))
let Pawn = new Config(20, 5, 3)
let Pawn1 = new Config(20, 3, 5)


describe("Pawn", function() {
    describe("getLife", function() {
        it("Montre la vie",function() {
            expect(Pawn.getLife()).toBeDefined();
          });   
    });
    describe("getStrength", function() {
        it("Montre la force",function() {
            expect(Pawn.getStrength()).toBeDefined();
          });   
    });
    describe("getDef", function() {
        it("Montre la def",function() {
            expect(Pawn.getDef()).toBeDefined();
          });   
    });
    describe("attack", function() {
        it("Action d'attaque",function() {
            expect(Pawn.attack(Pawn1)).toBe(true);
          });   
    });
    describe("receiveAttack", function() {
        it("Action de contre-attaque",function() {
            expect(Pawn.receiveAttack(Pawn1)).toBe(true);
            console.log(Pawn1)
          });   
    });
});