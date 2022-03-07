const list = [
  { name: 'Daniel Stevens', email: 'daniel.stevens@example.com', phone: '(884)-464-8956' },
  { name: 'Claire Obrien', email: 'claire.obrien@example.com', phone: '(552)-659-9852' },
  { name: 'Stacy Armstrong', email: 'stacy.armstrong@example.com', phone: '(163)-690-0493' },
  { name: 'Joel Curtis', email: 'joel.curtis@example.com', phone: '(296)-672-9602' },
  { name: 'Ethan Armstrong', email: 'ethan.armstrong@example.com', phone: '(686)-900-6877' },
  { name: 'Seth Soto', email: 'seth.soto@example.com', phone: '(216)-507-9393' },
  { name: 'Ted Williams', email: 'ted.williams@example.com', phone: '(048)-081-8448' },
  { name: 'Brent Sanchez', email: 'brent.sanchez@example.com', phone: '(272)-315-7429' },
  { name: 'Wilma Castillo', email: 'wilma.castillo@example.com', phone: '(749)-622-7669' },
  { name: 'Tiffany Simmons', email: 'tiffany.simmons@example.com', phone: '(218)-883-0011' },
]
list.forEach((elem) => {
  console.log(elem.name)
  document.body.innerHTML += `<h5>${elem.name}</h5>`
})
