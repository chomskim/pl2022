"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const fivecards_1 = __importDefault(require("./fivecards"));
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
function generate5CardList(gencount) {
    // Generate List<FiveCards>
    let p5CardsList = [];
    let deckCard = [];
    // Make a Card Deck
    for (let s = card_1.default.CLUB; s <= card_1.default.SPADE; s++)
        for (let r = card_1.default.ACE; r <= card_1.default.KING; r++) {
            deckCard.push(new card_1.default(s, r));
        }
    //console.log(`deckCard=${deckCard}`)
    for (let i = 1; i <= gencount; i++) {
        suffle(deckCard);
        //console.log(`deckCard=${deckCard}`)
        // Make a Card Deck
        let indDeck = 0;
        let fc = new Array(5);
        let ipos = 0;
        while (indDeck < deckCard.length) {
            fc[ipos] = deckCard[indDeck];
            indDeck++;
            ipos++;
            if (ipos == 5) {
                p5CardsList.push(new fivecards_1.default(fc));
                ipos = 0;
            }
        }
    }
    return p5CardsList;
}
function suffle(list) {
    const SUFFLECOUNT = 100;
    //println "List before Suffle"
    //printList(list);
    let oneOrzero = 0;
    let lsize = list.length;
    let ind = 0;
    for (let i = 1; i <= SUFFLECOUNT * lsize; i++) {
        // random number  0 or 1
        oneOrzero = Math.random() <= 0.5 ? 0 : 1;
        //console.log(`ind=${ind} rand=${oneOrzero} card=${list[ind]}`)
        if (oneOrzero === 0) {
            // swap with last element
            ;
            [list[ind], list[list.length - 1]] = [list[list.length - 1], list[ind]];
        }
        else {
            ind++;
            ind %= lsize;
        }
    }
    //println "List after Suffle"
    //printList(list);
}
function printFiveCardsList(fcList) {
    fcList.forEach((fc, i) => {
        console.log(`${i + 1} ${fc}`);
    });
}
// Main
// Test for Five Cards List
let list5card = generate5CardList(10);
console.log('---init 5 cards list---');
printFiveCardsList(list5card);
