export default class Hand {
    constructor(config) {
        this.limit = config.limit
        if(this.limit === undefined){
            this.limit = 7
        }
        this.cards = config.cards
    }

    addCard(cards) {
        if(this.cards.length === this.limit){
            return false
        }else{
            if(this.cards.push(cards)){
                this.cards.concat(...cards)
                return true
            }
        }
    }

    removeCard(pos) {
        let card_play = this.cards.splice(pos, 1)
        return card_play
    }

    getAllCards() {
        return this.cards
    }

    getCardsCount(){
        return this.cards.length
    }

}