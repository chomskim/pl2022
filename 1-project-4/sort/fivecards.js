const Comparable = require('./comparable')
const Card = require('./card')
const selSort = require('./selSort')

class FiveCards extends Comparable {
  constructor(cards) {
    super()
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    this.reorder()
  }

  compareTo(right) {
    return this.fiveCards[0].compareTo(right.fiveCards[0])
  }

  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  reorder() {
    this.fiveCards = selSort(this.fiveCards)
  }
}

module.exports = FiveCards
