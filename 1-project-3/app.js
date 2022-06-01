// Project 3 -- Use Class
function listConsole(phoneBook) {
  phoneBook.list().forEach((row) => {
    console.log(JSON.stringify(row));
  });
}

function listHTML(phoneBook) {
  const tbody = document.querySelector('#contact-table-body');
  const tbodyText = phoneBook
    .list()
    .map((tr) => {
      return `<tr><td>${tr.name}</td><td>${tr.email}</td><td>${tr.phone}</td></tr>`;
    })
    .join('\n');
  console.log(tbodyText);
  tbody.innerHTML = tbodyText;
}

// Main Routine
let PHOME_BOOK_1 = new PhoneBook('CONTACT_DB_1');
let PHOME_BOOK_2 = new PhoneBook('CONTACT_DB_2');

console.log('After Initial Create');

listConsole(PHOME_BOOK_1);
listConsole(PHOME_BOOK_2);

PHOME_BOOK_1.create({ name: 'cskim', email: 'cskim@hufs.ac.kr', phone: '031-330-4365' });
PHOME_BOOK_2.create({ name: 'cskim', email: 'cskim@hufs-gsuite.kr', phone: '010-111-1234' });
console.log('After add 2 cskim ');
listConsole(PHOME_BOOK_1);
listConsole(PHOME_BOOK_2);

PHOME_BOOK_1.read({ name: 'cskim' });
PHOME_BOOK_2.read({ name: 'cskim' });

PHOME_BOOK_1.update({ name: 'cskim' }, { phone: '010-555-5555' });
PHOME_BOOK_2.update({ name: 'cskim' }, { phone: '010-555-5555' });

console.log('After Update cskim');
listConsole(PHOME_BOOK_1);
listConsole(PHOME_BOOK_2);
//remove({ name: 'cskim' })
//console.log('After Remove cskim')
//listConsole()

listHTML(PHOME_BOOK_1);
//listHTML(PHOME_BOOK_2);
