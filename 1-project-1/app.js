let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`
  const email = user.email
  const phone = user.phone
  return { name, email, phone }
})

console.log(contactList)
console.log(JSON.stringify(contactList))

const CONTACT_DB = []

function create(row) {
  CONTACT_DB.push(row)
}

function read(keyObj) {
  const founds = CONTACT_DB.filter((row) => row.name === keyObj.name)
  const searchDiv = document.querySelector('#search')
  searchDiv.innerHTML = `<h5>name: ${keyObj.name} </h5>`
  const foundDiv = document.querySelector('#found')
  founds.forEach((user) => {
    console.log(user.name)
    foundDiv.innerHTML += `<h5>${user.name} ${user.email} ${user.phone} </h5>`
  })
  return founds
}

function update(keyObj, valueObj) {}

function remove(keyObj) {}

function list() {
  const tbody = document.querySelector('#contact-table-body')
  const tbodyText = CONTACT_DB.map((tr) => {
    return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
  }).join('\n')
  console.log(tbodyText)
  tbody.innerHTML = tbodyText
}

// Main Routine
contactList.forEach((row) => {
  create(row)
})
create({ name: 'cskim', email: 'cskim@hufs.ac.kr', phone: '031-330-4365' })
list()
read({ name: 'cskim' })
