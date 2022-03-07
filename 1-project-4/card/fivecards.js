const Comparable = require('./comparable')
const Card = require('./card')

class FiveCards extends Comparable {
  constructor(cards) {
    super()
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    //FiveCards.reorder()
  }

  compareTo(right) {
    return this.fiveCards[0].compareTo(right.fiveCards[0])
  }

  toString() {
    let allCardString = this.fiveCards.join(', ')
    return `[${allCardString}]`
  }
  //reorder() {
  //  let sorter = new SelSort()
  //  this.fiveCards = sorter.sort(fiveCards)
  //}
}

module.exports = FiveCards
