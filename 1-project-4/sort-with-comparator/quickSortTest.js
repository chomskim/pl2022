const Card = require("../card/card")
const quickSort = require("./quickSort")
const CardComparator = require("./card-comparator")
const CardComparatorString = require("./card-comparator-string")

const LINE_MAX = 13

function printList(list) {
  let res = []
  list.forEach((card, i) => {
    res.push(card)
    i += 1
    if (i % LINE_MAX === 0) {
      console.log(`${res.join(" ")}`)
      res = []
    }
  })
}

// Main
let deck = []
for (let s = Card.CLUB; s <= Card.SPADE; s++) {
  for (let r = Card.ACE; r <= Card.KING; r++) {
    deck.push(new Card(s, r))
  }
}
console.log("---init---")
printList(deck)

let comp = new CardComparator()
let sorted = quickSort(deck, comp)
console.log("---sorted---")
printList(sorted)

console.log("---sort by comp string---")
printList(quickSort(deck, new CardComparatorString()))
