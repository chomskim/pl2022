class PhoneBook {
  constructor(pbName) {
    this.phoneBookName = pbName
    this.phoneBookDB = PhoneBook.initDB(pbName)
  }

  create(row) {
    this.phoneBookDB.push(row)
    PhoneBook.saveDB(this.phoneBookName, this.phoneBookDB)
  }

  read(keyObj) {
    const founds = this.phoneBookDB.filter((row) => row.name === keyObj.name)
    return founds
  }

  update(keyObj, valueObj) {
    const founds = this.phoneBookDB.filter((row) => row.name === keyObj.name)
    let updMember = founds && founds.length > 0 ? founds[0] : null
    if (!updMember) return
    const newDB = this.phoneBookDB.filter((row) => row.name !== keyObj.name)
    updMember = { ...updMember, ...valueObj }
    //console.log(updMember)
    this.phoneBookDB = [...newDB, updMember]
    PhoneBook.saveDB(this.phoneBookName, this.phoneBookDB)
  }

  remove(keyObj) {
    const newDB = this.phoneBookDB.filter((row) => row.name !== keyObj.name)
    this.phoneBookDB = [...newDB]
    PhoneBook.saveDB(this.phoneBookName, this.phoneBookDB)
  }

  list() {
    return this.phoneBookDB
  }

  // Utility Functions, Defined as static
  static saveDB(phoneBookName, phoneBookDB) {
    localStorage.setItem(phoneBookName, JSON.stringify(phoneBookDB))
  }

  static restoreDB(phoneBookName) {
    let db = localStorage.getItem(phoneBookName)
    return db ? JSON.parse(db) : null
  }

  static initDB(phoneBookName) {
    let PHONEBOOK_DB = PhoneBook.restoreDB(phoneBookName)
    console.log(`${phoneBookName}=`, JSON.stringify(PHONEBOOK_DB))
    if (PHONEBOOK_DB.length === null) {
      let contactList = RANDOM_USERS.results.map((user) => {
        const name = `${user.name.first} ${user.name.last}`
        const email = user.email
        const phone = user.phone
        return { name, email, phone }
      })
      PHONEBOOK_DB = []
      contactList.forEach((row) => {
        create(row)
      })
    }
    return PHONEBOOK_DB
  }
}
