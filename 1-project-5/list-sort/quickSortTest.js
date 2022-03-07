function quickSort(list, comp) {
  if (list.length <= 1) return list
  let piv = list[0]
  let low = list.filter((x) => comp(x, piv) < 0)
  let eql = list.filter((x) => comp(x, piv) === 0)
  let high = list.filter((x) => comp(x, piv) > 0)
  return quickSort(low, comp).concat(eql).concat(quickSort(high, comp))
}

let list = [2, 4, 6, 1, 3, 5, 4]
//let comp = (x, y) => x - y
let sorted = quickSort(list, (x, y) => x - y)
console.log(`sorted=${JSON.stringify(sorted)}`)

function listComp(xl, yl, comp) {
  if (xl.length === 0 && yl.length === 0) return 0
  else if (xl.length === 0) return -1
  else if (yl.length === 0) return 1
  else {
    let [xh, ...xtail] = xl
    let [yh, ...ytail] = yl
    if (xh === yh) return listComp(xtail, ytail, comp)
    else return comp(xh, yh)
  }
}
let listToSort = [
  [1, 5, 4, 3, 2, 1],
  [1, 6, 4, 3, 2, 1],
  [1, 6, 5, 3, 2, 1],
  [1, 13, 12, 7, 5, 1],
  [2, 1, 4, 3, 2],
  [2, 13, 11, 8, 6],
  [2, 13, 11, 8, 7],
  [3, 2, 1, 3],
  [3, 13, 12, 11],
  [3, 13, 12, 9],
  [4, 1, 3, 2],
  [4, 13, 12, 11],
  [4, 13, 12, 8],
  [5, 1, 2],
  [5, 13, 12],
  [5, 13, 11],
  [6, 1, 2],
  [6, 13, 12],
  [6, 13, 1],
  [6, 13, 1, 1],
]
let listSorted = quickSort(listToSort, (xl, yl) => listComp(xl, yl, (x, y) => x - y))
console.log(`listSorted=${JSON.stringify(listSorted)}`)

//const lcomp = (comp) => (list1, list2) => listComp(list1, list2, comp)
//const lcomp = (comp) => {
//  return (list1, list2) => listComp(list1, list2, comp)
//}
//const lcomp = function (comp) {
//  return (list1, list2) => listComp(list1, list2, comp)
//}
//function lcomp(comp) {
//  return (list1, list2) => listComp(list1, list2, comp)
//}
function lcomp(comp) {
  const func = (list1, list2) => listComp(list1, list2, comp)
  return func
}
//function lcomp(comp) {
//  return function (list1, list2) {
//    return listComp(list1, list2, comp)
//  }
//}
listSorted = quickSort(
  listToSort,
  lcomp((x, y) => x - y)
)
console.log(`listSorted=${JSON.stringify(listSorted)}`)
