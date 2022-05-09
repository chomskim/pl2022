import Card from './card'
import FiveCards from './fivecards'

const LINE_MAX = 13

function printList(list: Card[]): void {
  let res: Card[] = []
  list.forEach((card, i) => {
    res.push(card)
    i += 1
    if (i % LINE_MAX === 0) {
      console.log(`${res.join(' ')}`)
      res = []
    }
  })
}

function generate5CardList(gencount: number): FiveCards[] {
  // Generate List<FiveCards>
  let p5CardsList: FiveCards[] = []
  let deckCard: Card[] = []

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

    let fc = new Array<Card>(5)
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
function suffle(list: Card[]) {
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
function printFiveCardsList(fcList: FiveCards[]) {
  fcList.forEach((fc, i) => {
    console.log(`${i + 1} ${fc}`)
  })
}

// Main
// Test for Five Cards List
let list5card = generate5CardList(10)
console.log('---init 5 cards list---')
printFiveCardsList(list5card)
