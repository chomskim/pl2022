const Comparator = require("./comparator")

class CardComparatorString extends Comparator {
  constructor() {
    super()
  }
  compare(card1, card2) {
    if (card1.toString() < card2.toString()) return -1
    else if (card1.toString() > card2.toString()) return 1
    else return 0
  }
}

module.exports = CardComparatorString
