const RANDOM_USERS = require('./rusers.js');

let contactList = RANDOM_USERS.results.map((user) => {
  const name = `${user.name.first} ${user.name.last}`;
  const email = user.email;
  const phone = user.phone;
  return { name, email, phone };
});
console.log(JSON.stringify(contactList));

// List
console.log('======== List =========');
contactList.forEach((ro) => {
  console.log(ro);
});

// Read by name
console.log('======== Read =========');
let found = contactList.filter((ro) => ro.name === 'Wilma Castillo');
console.log(found);
if (found.length > 0) console.log(found[0]);
found = contactList.filter((ro) => ro.name === 'cskim');
console.log(found);
console.log(found[0]);

// Create(Insert a row)
console.log('======== Create =========');
let newRow = {
  name: 'cskim',
  email: 'cskim@hufs.ac.kr',
  phone: '031-330-4365',
};
contactList.push(newRow);
newRow = {
  name: 'cskim',
  email: 'cskim@hufs-gsuite.kr',
  phone: '010-111-1234',
};
contactList.push(newRow);
contactList.forEach((ro) => {
  console.log(ro);
});
console.log('======== Find cskim =========');
found = contactList.filter((ro) => ro.name === 'cskim');
console.log(found);

// Delete by name
contactList = contactList.filter((ro) => ro.name !== 'Wilma Castillo');
console.log('======== Delete Wilma Castillo =========');
contactList.forEach((ro) => {
  console.log(ro);
});
found = contactList.filter((ro) => ro.name === 'Wilma Castillo');
console.log(found);

// Update by email
// Method 1 -- delete and insert
let email = 'cskim@hufs-gsuite.kr';
// delete
contactList = contactList.filter((ro) => ro.email !== email);
// insert -- new phone = 010-555-5555
contactList.push({
  name: 'cskim',
  email: 'cskim@hufs-gsuite.kr',
  phone: '010-555-5555',
});
console.log('======== Update method 1 =========');
contactList.forEach((ro) => {
  console.log(ro);
});
// Update method 2
contactList = [
  ...contactList.filter((ro) => ro.email !== email),
  {
    name: 'cskim',
    email: 'cskim@hufs-gsuite.kr',
    phone: '010-111-0000',
  },
];
console.log('======== Update method 2 =========');
contactList.forEach((ro) => {
  console.log(ro);
});
// Update method 3 --- not insert and delete
contactList.forEach((ro, i) => {
  if (ro.email === email) {
    let updRow = { ...ro, phone: '010-999-9999' };
    contactList[i] = updRow;
  }
});
console.log('======== Update method 3 =========');
contactList.forEach((ro) => {
  console.log(ro);
});
