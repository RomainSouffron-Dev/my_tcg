import EventManager from "../eventManager";

export default class Game extends EventManager {
    constructor(config) {
        super(config)
        this.up = config.up;
        this.down = config.down;
        this.turn = this.up;
    }

    getTurn() {
        return this.turn === this.up ? 'up' : 'down'
    }
    changeTurn() {
        return this.turn === this.up ? this.turn = this.down : this.turn = this.up
    }
    proxy(side, action, payload) {
        return side +'.' + action + '(' + payload + ')'
    }
}