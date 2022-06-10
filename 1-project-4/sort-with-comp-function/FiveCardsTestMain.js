const Card = require('./card')
const FiveCards = require('./fivecards')
const selSort = require('./selSort')
const quickSort = require('./quickSort')

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

function generate5CardList(gencount) {
  // Generate List<FiveCards>
  let p5CardsList = []
  let deckCard = []

  // Make a Card Deck
  for (let s = Card.CLUB; s <= Card.SPADE; s++)
    for (let r = Card.ACE; r <= Card.KING; r++) {
      deckCard.push(new Card(s, r))
    }

  //console.log(`deckCard=${deckCard}`)
  for (let i = 1; i <= gencount; i++) {
    suffle(deckCard)
    //console.log(`deckCard=${deckCard}`)
    // Make a Card Deck
    let indDeck = 0

    let fc = new Array(5)
    let ipos = 0
    while (indDeck < deckCard.length) {
      fc[ipos] = deckCard[indDeck]
      indDeck++
      ipos++
      if (ipos == 5) {
        p5CardsList.push(new FiveCards(fc))
        ipos = 0
      }
    }
  }
  return p5CardsList
}
function suffle(list) {
  const SUFFLECOUNT = 100

  //println "List before Suffle"
  //printList(list);
  let oneOrzero = 0
  let lsize = list.length
  let ind = 0
  for (let i = 1; i <= SUFFLECOUNT * lsize; i++) {
    // random number  0 or 1
    oneOrzero = Math.random() <= 0.5 ? 0 : 1
    //console.log(`ind=${ind} rand=${oneOrzero} card=${list[ind]}`)
    if (oneOrzero === 0) {
      // swap with last element
      ;[list[ind], list[list.length - 1]] = [list[list.length - 1], list[ind]]
    } else {
      ind++
      ind %= lsize
    }
  }
  //println "List after Suffle"
  //printList(list);
}
function printFiveCardsList(fcList) {
  fcList.forEach((fc, i) => {
    console.log(`${i + 1} ${fc}`)
  })
}

// Main
// Test for Five Cards List
let list5card = generate5CardList(10)

// Add more sample data
const fourCards = [
  new Card(Card.CLUB, 1),
  new Card(Card.DIAMOND, 1),
  new Card(Card.HEART, 1),
  new Card(Card.SPADE, 1),
  new Card(Card.CLUB, 2),
]
list5card.push(new FiveCards(fourCards))
// Add same card to test equal compare
list5card.push(new FiveCards(fourCards))

const fullhouse = [
  new Card(Card.CLUB, 1),
  new Card(Card.DIAMOND, 1),
  new Card(Card.HEART, 1),
  new Card(Card.SPADE, 13),
  new Card(Card.CLUB, 13),
]
list5card.push(new FiveCards(fullhouse))

const straight = [
  new Card(Card.CLUB, 1),
  new Card(Card.DIAMOND, 2),
  new Card(Card.HEART, 3),
  new Card(Card.SPADE, 4),
  new Card(Card.CLUB, 5),
]
list5card.push(new FiveCards(straight))

const flush = [
  new Card(Card.CLUB, 1),
  new Card(Card.CLUB, 2),
  new Card(Card.CLUB, 3),
  new Card(Card.CLUB, 4),
  new Card(Card.CLUB, 6),
]
list5card.push(new FiveCards(flush))

const straightflu = [
  new Card(Card.CLUB, 1),
  new Card(Card.CLUB, 2),
  new Card(Card.CLUB, 3),
  new Card(Card.CLUB, 4),
  new Card(Card.CLUB, 5),
]
list5card.push(new FiveCards(straightflu))

const twopair = [
  new Card(Card.CLUB, 1),
  new Card(Card.DIAMOND, 1),
  new Card(Card.HEART, 10),
  new Card(Card.SPADE, 10),
  new Card(Card.CLUB, 2),
]
list5card.push(new FiveCards(twopair))

const onepair = [
  new Card(Card.CLUB, 1),
  new Card(Card.DIAMOND, 1),
  new Card(Card.HEART, 4),
  new Card(Card.SPADE, 5),
  new Card(Card.CLUB, 6),
]
list5card.push(new FiveCards(onepair))

const nopair = [
  new Card(Card.CLUB, 1),
  new Card(Card.DIAMOND, 3),
  new Card(Card.HEART, 5),
  new Card(Card.SPADE, 7),
  new Card(Card.CLUB, 9),
]
list5card.push(new FiveCards(nopair))

console.log('---init 5 cards list---')
printFiveCardsList(list5card)

//console.log('---sorted---')
//printFiveCardsList(list5card.sort())
console.log('---sorted use compareTo---')
printFiveCardsList(list5card.sort((left, right) => left.compareTo(right)))
console.log('---sorted use static compare---')
printFiveCardsList(list5card.sort(FiveCards.compare))
console.log('---sorted use selSort and FiveCards.compare---')
printFiveCardsList(selSort(list5card, FiveCards.compare))

console.log('---sorted use quickSort and FiveCards.compare---')
printFiveCardsList(quickSort(list5card, FiveCards.compare))

function comp1(left, right) {
  for (let i = 0; i < left.length; ++i) {
    let res = left.compareTo(right)
    if (res !== 0) return res
  }
  return 0
}
console.log('---sorted use quickSort and comp1---')
printFiveCardsList(quickSort(list5card, comp1))
