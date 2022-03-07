import Card from './card.js'

function getPairs(list5) {
  //list5 -- list of five ranks
  if (list5.length < 2) return []
  else {
    if (list5[0] === list5[1]) return [list5[0]].concat(getPairs(list5.slice(2, list5.length)))
    else return getPairs(list5.slice(1, list5.length))
  }
}

function getPairTransform(fcList) {
  //fclist -- list of fiveCards ranks
  let pairList = getPairs(fcList)
  if (pairList.length === 0) {
    return [1, ...fcList] // no pair
  } else if (pairList.length === 1) {
    return [2, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
  } else if (pairList.length === 2) {
    // two pair or 4 cards
    if (pairList[0] !== pairList[1]) {
      // two pair
      return [3, ...pairList, ...fcList.filter((r) => !pairList.includes(r))]
    } else {
      // 4 cards
      return [8, pairList[0], ...fcList.filter((r) => !pairList.includes(r))]
    }
  }
  return [1, ...fcList] // no pair
}

const isStraight = (list5) =>
  list5.reduce(
    (prev, curr, i) => (i === list5.length - 1 ? prev : prev && list5[i] === list5[i + 1] + 1),
    true
  )

function changeAceToOne(fcList) {
  //fclist -- list of fiveCards ranks
  let resList = [...fcList]
  let aceIndex = resList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    resList[aceIndex] = 1
    resList.sort((x, y) => y - x)
  }
  return resList
}
function getStraightScore(fcList) {
  //fclist -- list of fiveCards ranks

  // return 0 if not straight
  // return fcList[0] if straight
  // return newList[0] if has Ace and changed to 1 is straight
  let straight = isStraight(fcList)
  if (straight) return fcList[0]

  let aceIndex = fcList.indexOf(14) // has Ace
  if (aceIndex !== -1) {
    let newList = changeAceToOne(fcList)
    if (isStraight(newList)) return newList[0]
  }
  return 0
}

function getStraightTransform(fcList) {
  //fclist -- list of fiveCards ranks
  let topVal = getStraightScore(fcList)
  return topVal ? [5, topVal] : [0]
}

function getTripleTransform(fclist) {}
function isFlush(fiveCards) {}
function pokerTransform(fiveCards) {
  //fiveCards -- A FiveCards Instance
  let fclist = fiveCards.fiveCards.map((ca) => (ca.rank === Card.ACE ? Card.KING + 1 : ca.rank))
  //fclist -- list of fiveCards ranks
  let pokerRankList = getPairTransform(fclist)
  let tempList = getStraightTransform(fclist)
  pokerRankList = tempList[0] > pokerRankList[0] ? tempList : pokerRankList
  // triple check
  // Full house check
  // Flush check
  // Straight Flush check
  return pokerRankList
}

export default pokerTransform
