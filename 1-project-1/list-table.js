let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})
console.log(JSON.stringify(contactList))

const tbody = document.querySelector('#contact-table-body')
const tbodyText = contactList
  .map((tr) => {
    return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
  })
  .join('\n')
console.log(tbodyText)
tbody.innerHTML = tbodyText
