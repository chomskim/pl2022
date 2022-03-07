const Card = require('./card')

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
// Test for a Card Deck
let deck = []
for (let s = Card.CLUB; s <= Card.SPADE; s++) {
  for (let r = Card.ACE; r <= Card.KING; r++) {
    deck.push(new Card(s, r))
  }
}
console.log('---init---')
printList(deck)
console.log('---sorted string compare---')
printList(deck.sort())
console.log('---sorted rank compare---')
printList(deck.sort(Card.compare))
console.log('---sorted rank compare---')
printList(deck.sort((left, right) => left.compareTo(right)))
