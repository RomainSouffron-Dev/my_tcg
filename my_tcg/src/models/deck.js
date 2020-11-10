export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {

        if (!Array.isArray(this.cards) || !this.cards.length) {
            return false
        }else{
            this.cards.sort(function() { return 0.5 - Math.random() });
            return true;
        }
    }
    draw() {

        if (!Array.isArray(this.cards) || !this.cards.length) {
            return false
        } else {
            let card = this.cards.shift();
            return card;
        }
    }

    getCardsCount() {
        return this.cards.length;
    }
}