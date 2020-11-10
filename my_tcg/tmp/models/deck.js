"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck(config) {
        _classCallCheck(this, Deck);

        this.cards = config.cards;
    }

    _createClass(Deck, [{
        key: "shuffle",
        value: function shuffle() {

            if (!Array.isArray(this.cards) || !this.cards.length) {
                return false;
            } else {
                this.cards.sort(function () {
                    return 0.5 - Math.random();
                });
                return true;
            }
        }
    }, {
        key: "draw",
        value: function draw() {

            if (!Array.isArray(this.cards) || !this.cards.length) {
                return false;
            } else {
                var card = this.cards.shift();
                return card;
            }
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }, {
        key: "insertAt",
        value: function insertAt() {
            var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var pos = arguments[1];

            if (!Array.isArray(this.cards) || card === false) {
                return false;
            }
            var oldDeckSize = this.cards.length;
            this.cards.splice(pos, 0, card);
            if (oldDeckSize + 1 === this.cards.length) {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return Deck;
}();

exports.default = Deck;