"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiveCards {
    constructor(cards) {
        this.fiveCards = [...cards];
        //FiveCards.reorder()
    }
    compareTo(right) {
        return this.fiveCards[0].compareTo(right.fiveCards[0]);
    }
    toString() {
        let allCardString = this.fiveCards.join(', ');
        return `[${allCardString}]`;
    }
}
exports.default = FiveCards;
