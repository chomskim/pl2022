"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(s, r) {
        this.suit = s;
        this.rank = r;
    }
    toString() {
        let image;
        switch (this.suit) {
            case Card.CLUB:
                image = 'CL-';
                break;
            case Card.DIAMOND:
                image = 'DI-';
                break;
            case Card.HEART:
                image = 'HE-';
                break;
            case Card.SPADE:
                image = 'SP-';
                break;
            default:
                image = '';
        }
        switch (this.rank) {
            case Card.ACE:
                image += 'A ';
                break;
            case Card.JACK:
                image += 'J ';
                break;
            case Card.QUEEN:
                image += 'Q ';
                break;
            case Card.KING:
                image += 'K ';
                break;
            case 10:
                image += '10';
                break;
            default:
                image = image + this.rank + ' ';
        }
        return image;
    }
    compareTo(right) {
        let lrank, rrank;
        if (this.rank === Card.ACE)
            lrank = Card.KING + 1;
        else
            lrank = this.rank;
        if (right.rank === Card.ACE)
            rrank = Card.KING + 1;
        else
            rrank = right.rank;
        let diff = lrank - rrank;
        return diff;
    }
    static compare(left, right) {
        let lrank = left.rank;
        let rrank = right.rank;
        if (lrank === Card.ACE)
            lrank = Card.KING + 1;
        if (rrank === Card.ACE)
            rrank = Card.KING + 1;
        let diff = lrank - rrank;
        return diff;
    }
}
exports.default = Card;
Card.ACE = 1;
Card.JACK = 11;
Card.QUEEN = 12;
Card.KING = 13;
Card.CLUB = 1;
Card.DIAMOND = 2;
Card.HEART = 3;
Card.SPADE = 4;
