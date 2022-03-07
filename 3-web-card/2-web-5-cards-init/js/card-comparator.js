import Comparator from './comparator.js'

class CardComparator extends Comparator {
  constructor() {
    super()
  }
  compare(card1, card2) {
    return -card1.compareTo(card2)
  }
}

export default CardComparator
