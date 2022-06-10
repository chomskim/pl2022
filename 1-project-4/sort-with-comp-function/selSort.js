function getMinIndex(list, restPos, comp) {
  let minInd = restPos
  for (let i = restPos + 1; i < list.length; ++i) {
    if (comp(list[i], list[minInd]) < 0) {
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
