"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const LINE_MAX = 13;
function printList(list) {
    let res = [];
    list.forEach((card, i) => {
        res.push(card);
        i += 1;
        if (i % LINE_MAX === 0) {
            console.log(`${res.join(' ')}`);
            res = [];
        }
    });
}
// Main
// Test for a Card Deck
let deck = [];
for (let s = card_1.default.CLUB; s <= card_1.default.SPADE; s++) {
    for (let r = card_1.default.ACE; r <= card_1.default.KING; r++) {
        deck.push(new card_1.default(s, r));
    }
}
console.log('---init---');
printList(deck);
console.log('---sorted---');
printList(deck.sort());
console.log('---sorted rank compare---');
printList(deck.sort(card_1.default.compare));
console.log('---sorted rank compare---');
printList(deck.sort((left, right) => left.compareTo(right)));
