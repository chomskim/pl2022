function quickSort(list, comp) {
  //console.log(list)
  let n = list.length
  if (n < 2) return list

  let list1 = []
  let list2 = []
  let listEq = []

  let pivot = list[0]

  for (let i = 0; i < list.length; ++i) {
    if (comp.compare(list[i], pivot) < 0) {
      list1.push(list[i])
    } else if (comp.compare(list[i], pivot) === 0) {
      listEq.push(list[i])
    } else {
      list2.push(list[i])
    }
  }

  let res = []
    .concat(quickSort(list1, comp))
    .concat(listEq)
    .concat(quickSort(list2, comp))

  return res
}

module.exports = quickSort
