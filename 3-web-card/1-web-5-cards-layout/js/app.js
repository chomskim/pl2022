// sort btn
const sortBtn = document.querySelector('.sort-btn')
let isSort = true
sortBtn.addEventListener('click', function () {
  console.log(sortBtn)
  console.log(`${sortBtn.textContent}  clicked`)
  sortBtn.textContent = isSort ? 'retry' : 'sort'
  isSort = !isSort
})
