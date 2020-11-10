import EventManager from "../eventManager";

export default class Pawn extends EventManager {
    constructor(life, strength, def) {
        super(life, strength, def)
        // if (this.constructor === Pawn) {
        //     throw new TypeError('Abstract class "Pawn" cannot be instantiated directly');
        //   }
        this.strength = strength
        this.life = life
        this.def = def
    }

    getLife() {
        return this.life
    }
    getStrength() {
        return this.strength
    }
    getDef() {
        return this.def
    }
    attack(target) {
        return target.receiveAttack(this)
    }
    receiveAttack(opponent, strikeback = false) {
        if (strikeback === false) {
            let atk = opponent.getStrength()
            this.life = this.life - atk
            opponent.receiveAttack(this, true)
            return true
        }else{
            opponent.life = opponent.getLife() - this.def
            return true
        }
    }
}