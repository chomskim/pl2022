const userList = [
  {
    id: '1',
    name: 'Daniel Stevens',
    email: 'daniel.stevens@example.com',
    phone: '(884)-464-8956',
    amount: 10,
  },
  {
    id: '2',
    name: 'Claire Obrien',
    email: 'claire.obrien@example.com',
    phone: '(552)-659-9852',
    amount: 20,
  },
  {
    id: '3',
    name: 'Stacy Armstrong',
    email: 'stacy.armstrong@example.com',
    phone: '(163)-690-0493',
    amount: 30,
  },
  {
    id: '4',
    name: 'Joel Curtis',
    email: 'joel.curtis@example.com',
    phone: '(296)-672-9602',
    amount: 40,
  },
  {
    id: '5',
    name: 'Ethan Armstrong',
    email: 'ethan.armstrong@example.com',
    phone: '(686)-900-6877',
    amount: 50,
  },
  {
    id: '6',
    name: 'Seth Soto',
    email: 'seth.soto@example.com',
    phone: '(216)-507-9393',
    amount: 60,
  },
  {
    id: '7',
    name: 'Ted Williams',
    email: 'ted.williams@example.com',
    phone: '(048)-081-8448',
    amount: 70,
  },
  {
    id: '8',
    name: 'Brent Sanchez',
    email: 'brent.sanchez@example.com',
    phone: '(272)-315-7429',
    amount: 80,
  },
  {
    id: '9',
    name: 'Wilma Castillo',
    email: 'wilma.castillo@example.com',
    phone: '(749)-622-7669',
    amount: 90,
  },
  {
    id: '10',
    name: 'Tiffany Simmons',
    email: 'tiffany.simmons@example.com',
    phone: '(218)-883-0011',
    amount: 101,
  },
];

userList.forEach((user) => {
  console.log(user);
});
console.log('==============================');
let newUserList = userList.map((user) => {
  let { id, name, amount } = user;
  return {
    id,
    name,
    amount,
  };
});
newUserList.forEach((user) => {
  console.log(user);
});
// delete id === 1
console.log('==============================');
console.log('delete id === 1');
newUserList = newUserList.filter((user) => user.id !== '1');
newUserList.forEach((user) => {
  console.log(user);
});
// update for id===2 amount=200
console.log('==============================');
console.log('update for id===2 amount=200');
let updUser = newUserList.filter((user) => user.id === '2')[0];
console.log('updUser=', updUser);
updUser = { ...updUser, amount: 200 };
console.log('updUser=', updUser);
newUserList = newUserList.filter((user) => user.id !== '2');
newUserList = [...newUserList, updUser];
newUserList.forEach((user) => {
  console.log(user);
});
