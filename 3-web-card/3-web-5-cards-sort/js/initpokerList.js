import Card from './card.js'
import FiveCards from './fivecards.js'
import sampleList from './fivecards-sample.js'

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
    console.log(`${i + 1} ${fc} -- [${fc.rankInfo}]`)
  })
}

function randomSelect(list, limit) {
  const result = []
  const listCopy = [...list]
  let pos = 0
  while (result.length < limit) {
    let oneOrzero = Math.random() <= 0.5 ? 0 : 1
    if (oneOrzero) {
      const delItem = listCopy.splice(pos, 1)[0]
      result.push(delItem)
    } else {
      pos += 1
    }
    pos = pos === listCopy.length ? 0 : pos
  }
  return result
}
function initPokerList() {
  // Main
  // Test for Five Cards List
  let list5card = generate5CardList(2)

  // Add more sample data
  sampleList.forEach((li5) => {
    list5card.push(new FiveCards(li5))
  })
  console.log('---init 5 cards list---')
  printFiveCardsList(list5card)

  console.log('---random selected 5 cards list---')
  const randomSelected = randomSelect(list5card, 18)
  const a4 = [
    new Card(Card.DIAMOND, Card.ACE),
    new Card(Card.HEART, Card.ACE),
    new Card(Card.SPADE, Card.ACE),
    new Card(Card.CLUB, Card.ACE),
    new Card(Card.DIAMOND, Card.KING),
  ]
  randomSelected.push(new FiveCards(a4))
  const sf = [
    new Card(Card.DIAMOND, Card.ACE),
    new Card(Card.DIAMOND, Card.KING),
    new Card(Card.DIAMOND, Card.QUEEN),
    new Card(Card.DIAMOND, Card.JACK),
    new Card(Card.DIAMOND, 10),
  ]
  randomSelected.push(new FiveCards(sf))
  printFiveCardsList(randomSelected)
  return randomSelected
}

//initPokerList()

export default initPokerList
