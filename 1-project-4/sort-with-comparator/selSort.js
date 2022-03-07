function getMinIndex(list, rest, comp) {
  let minInd = rest
  for (let i = rest + 1; i < list.length; ++i) {
    if (comp.compare(list[i], list[minInd]) < 0) {
      //if (list[i] < list[minInd]) { // string compare
      minInd = i
    }
  }
  return minInd
}
function selSort(list, comp) {
  let copy = [...list]
  let lsize = copy.length
  for (let i = 0; i < lsize; ++i) {
    let minit = getMinIndex(copy, i, comp)
    // swapNode(list, i, minit)
    ;[copy[i], copy[minit]] = [copy[minit], copy[i]]
  }
  return copy
}

module.exports = selSort
