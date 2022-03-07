import Card from './card.js'
import initPokerList from './initpokerList.js'

// DOM of grid-container
const fiveCardsList = initPokerList()
generatePokerImageHTML(fiveCardsList)
// sort btn
const sortBtn = document.querySelector('.sort-btn')
let isSort = true
sortBtn.addEventListener('click', function () {
  console.log(JSON.stringify(sortBtn))
  console.log(`${sortBtn.textContent}  clicked`)
  sortBtn.textContent = isSort ? 'retry' : 'sort'
  isSort = !isSort
})
function getCName(card) {
  let cname
  switch (card.suit) {
    case Card.CLUB:
      cname = 'c'
      break
    case Card.DIAMOND:
      cname = 'd'
      break
    case Card.HEART:
      cname = 'h'
      break
    case Card.SPADE:
      cname = 's'
      break
  }
  switch (card.rank) {
    case Card.ACE:
      cname += '1'
      break
    case Card.JACK:
      cname += 'j'
      break
    case Card.QUEEN:
      cname += 'q'
      break
    case Card.KING:
      cname += 'k'
      break
    default:
      cname = cname + card.rank
  }
  return cname
}
function generatePokerImageHTML(fiveCardsList) {
  const pokerImageList = document.querySelector('.grid-container')
  fiveCardsList.forEach((fc) => {
    const cards = fc.fiveCards
    let inners = cards.map((ca) => {
      const cname = getCName(ca)
      return `<img class="grid-card-img" src="./images/${cname}.png" alt="${cname}" />`
    })
    inners = inners.join('')
    console.log(`<div class="grid-item">${inners}</div>`)
    pokerImageList.innerHTML += `<div class="grid-item">${inners}</div>`
  })
}
