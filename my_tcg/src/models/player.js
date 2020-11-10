import Pawn from './pawn';

export default class Player extends Pawn {

    constructor(config) {
        super(config)
        this.type = config.type;
        this.deck = config.deck;
        this.board = config.board;
        this.hand = config.hand;
        this.cemetary = config.cemetary;
    }

    shuffle(type = 'deck') {
        return type === 'cemetary' ? this.cemetary.shuffle() : this.deck.shuffle()
    }
    draw() {
        return this.deck.draw();
    }
    playCard(pos) {
        let card = this.hand.removeCard(pos)
        return this.board.addCard(...card)
    }
    discard(pos) {
        let card = this.hand.removeCard(pos)
        if(this.cemetary.cards.push(card)){
            this.cemetary.cards.concat(...card)
            return true
        }
        return false
    }
    attack(pos, target) {
       let atk = this.board.removeCard(pos)
       return atk[0].receiveAttack(target)
    }
}