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
    if (this.fiveCards[0].compareTo(right.fiveCards[0]) !== 0) {
      return this.fiveCards[0].compareTo(right.fiveCards[0])
    } else if (this.fiveCards[1].compareTo(right.fiveCards[1]) !== 0) {
      return this.fiveCards[1].compareTo(right.fiveCards[1])
    } else if (this.fiveCards[2].compareTo(right.fiveCards[2]) !== 0) {
      return this.fiveCards[2].compareTo(right.fiveCards[2])
    } else if (this.fiveCards[3].compareTo(right.fiveCards[3]) !== 0) {
      return this.fiveCards[3].compareTo(right.fiveCards[3])
    } else {
      return this.fiveCards[4].compareTo(right.fiveCards[4])
    }
  }

  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  reorder() {
    this.fiveCards = selSort(this.fiveCards, Card.compare)
  }
  static compare(left, right) {
    return left.compareTo(right)
  }
}

module.exports = FiveCards
