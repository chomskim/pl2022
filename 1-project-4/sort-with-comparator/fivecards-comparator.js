const Comparator = require("./comparator")

class FiveCardsComparator extends Comparator {
  constructor() {
    super()
  }
  compare(fc1, fc2) {
    return fc1.compareTo(fc2)
  }
}

module.exports = FiveCardsComparator
