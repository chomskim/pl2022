// Project 2 -- Use Local Storage(localStore)

let CONTACT_DB = null

function saveDB() {
  console.log(JSON.stringify(CONTACT_DB))
  localStorage.setItem('CONTACT_DB', JSON.stringify(CONTACT_DB))
}

function restoreDB() {
  let db = localStorage.getItem('CONTACT_DB')
  CONTACT_DB = db ? JSON.parse(db) : null
}

function init() {
  restoreDB()
  console.log('CONTACT_DB=', JSON.stringify(CONTACT_DB))
  if (CONTACT_DB === null) {
    let contactList = RANDOM_USERS.results.map((user) => {
      const name = `${user.name.first} ${user.name.last}`
      const email = user.email
      const phone = user.phone
      return { name, email, phone }
    })
    CONTACT_DB = []
    contactList.forEach((row) => {
      create(row)
    })
  }
}

function create(row) {
  CONTACT_DB.push(row)
  saveDB()
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

function update(keyObj, valueObj) {
  const founds = CONTACT_DB.filter((row) => row.name === keyObj.name)
  let updMember = founds && founds.length > 0 ? founds[0] : null
  if (!updMember) return
  const newDB = CONTACT_DB.filter((row) => row.name !== keyObj.name)
  updMember = { ...updMember, ...valueObj }
  console.log(updMember)
  CONTACT_DB = [...newDB, updMember]
  saveDB()
}

function remove(keyObj) {
  const newDB = CONTACT_DB.filter((row) => row.name !== keyObj.name)
  CONTACT_DB = [...newDB]
  saveDB()
}

function list() {
  return CONTACT_DB
}

function listConsole() {
  list().forEach((row) => {
    console.log(JSON.stringify(row))
  })
}

function listHTML() {
  const tbody = document.querySelector('#contact-table-body')
  const tbodyText = list()
    .map((tr) => {
      return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`
    })
    .join('\n')
  console.log(tbodyText)
  tbody.innerHTML = tbodyText
}

// Main Routine

init()

console.log('After Initial Create')

listConsole()
create({ name: 'cskim', email: 'cskim@hufs.ac.kr', phone: '031-330-4365' })
create({ name: 'cskim', email: 'cskim@hufs-gsuite.kr', phone: '010-111-1234' })
console.log('After add 2 cskim ')
listConsole()

read({ name: 'cskim' })

update({ name: 'cskim' }, { phone: '010-555-5555' })
console.log('After Update cskim')
listConsole()

//remove({ name: 'cskim' })
//console.log('After Remove cskim')
//listConsole()

listHTML()
