"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
    function Hand(config) {
        _classCallCheck(this, Hand);

        this.limit = config.limit;
        if (this.limit === undefined) {
            this.limit = 7;
        }
        this.cards = config.cards;
    }

    _createClass(Hand, [{
        key: "addCard",
        value: function addCard(cards) {
            if (this.cards.length === this.limit) {
                return false;
            } else {
                if (this.cards.push(cards)) {
                    var _cards;

                    (_cards = this.cards).concat.apply(_cards, _toConsumableArray(cards));
                    return true;
                }
            }
        }
    }, {
        key: "removeCard",
        value: function removeCard(pos) {
            var card_play = this.cards.splice(pos, 1);
            return card_play;
        }
    }, {
        key: "getAllCards",
        value: function getAllCards() {
            return this.cards;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return Hand;
}();

exports.default = Hand;