const Card = require('./card')
const selSort = require('./selSort')

const LINE_MAX = 13

function printList(list) {
  let res = []
  list.forEach((card, i) => {
    res.push(card)
    i += 1
    if (i % LINE_MAX === 0) {
      console.log(`${res.join(' ')}`)
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
console.log('---init---')
printList(deck)

let sorted = selSort(deck, Card.compare) // deck.sort(Card.compare)
console.log('---sorted---')
printList(sorted)
