import CardComparator from './card-comparator.js'
import selSort from './selSort.js'
import pokerTransform from './pokerTransform.js'

class FiveCards {
  constructor(cards) {
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    this.reorder()
    this.rankInfo = pokerTransform(this)
  }

  compareTo(right) {
    return this.fiveCards[0].compareTo(right.fiveCards[0])
  }

  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  reorder() {
    this.fiveCards = selSort(this.fiveCards, new CardComparator().compare)
  }
}

export default FiveCards
