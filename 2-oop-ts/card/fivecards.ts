import Comparable from './comparable'
import Card from './card'

export default class FiveCards implements Comparable {
  fiveCards: Card[]
  constructor(cards: Card[]) {
    this.fiveCards = []
    cards.forEach((card) => {
      this.fiveCards.push(card)
    })
    //FiveCards.reorder()
  }

  compareTo(right: FiveCards) {
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
