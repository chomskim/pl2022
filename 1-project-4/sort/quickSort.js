function quickSort(list) {
  //console.log(list)
  let n = list.length
  if (n < 2) return list

  let list1 = []
  let list2 = []
  let listEq = []

  let pivot = list[0]

  for (let i = 0; i < list.length; ++i) {
    if (list[i].compareTo(pivot) < 0) {
      list1.push(list[i])
    } else if (list[i].compareTo(pivot) === 0) {
      listEq.push(list[i])
    } else {
      list2.push(list[i])
    }
  }

  let res = [].concat(quickSort(list1)).concat(listEq).concat(quickSort(list2))

  return res
}

module.exports = quickSort
