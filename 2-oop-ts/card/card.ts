import Comparable from './comparable'

export default class Card implements Comparable {
  static ACE = 1
  static JACK = 11
  static QUEEN = 12
  static KING = 13

  static CLUB = 1
  static DIAMOND = 2
  static HEART = 3
  static SPADE = 4

  suit: number
  rank: number
  constructor(s: number, r: number) {
    this.suit = s
    this.rank = r
  }

  toString() {
    let image: string
    switch (this.suit) {
      case Card.CLUB:
        image = 'CL-'
        break
      case Card.DIAMOND:
        image = 'DI-'
        break
      case Card.HEART:
        image = 'HE-'
        break
      case Card.SPADE:
        image = 'SP-'
        break
      default:
        image = ''
    }
    switch (this.rank) {
      case Card.ACE:
        image += 'A '
        break
      case Card.JACK:
        image += 'J '
        break
      case Card.QUEEN:
        image += 'Q '
        break
      case Card.KING:
        image += 'K '
        break
      case 10:
        image += '10'
        break
      default:
        image = image + this.rank + ' '
    }
    return image
  }

  compareTo(right: Card) {
    let lrank: number, rrank: number
    if (this.rank === Card.ACE) lrank = Card.KING + 1
    else lrank = this.rank

    if (right.rank === Card.ACE) rrank = Card.KING + 1
    else rrank = right.rank

    let diff = lrank - rrank

    return diff
  }
  static compare(left: Card, right: Card) {
    let lrank = left.rank
    let rrank = right.rank
    if (lrank === Card.ACE) lrank = Card.KING + 1
    if (rrank === Card.ACE) rrank = Card.KING + 1

    let diff = lrank - rrank

    return diff
  }
}
