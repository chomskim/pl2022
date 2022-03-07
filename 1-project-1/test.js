const res = {
  'results': [
    {
      'gender': 'male',
      'name': { 'title': 'Mr', 'first': 'Alfred', 'last': 'Mckinney' },
      'location': {
        'street': { 'number': 7847, 'name': 'Ash Dr' },
        'city': 'Coral Springs',
        'state': 'Wisconsin',
        'country': 'United States',
        'postcode': 95355,
        'coordinates': { 'latitude': '-7.5167', 'longitude': '-139.6285' },
        'timezone': { 'offset': '-2:00', 'description': 'Mid-Atlantic' },
      },
      'email': 'alfred.mckinney@example.com',
      'login': {
        'uuid': '096c03ff-af74-4862-adbf-1f7a2255006d',
        'username': 'silverwolf193',
        'password': 'solomon',
        'salt': 'M8EsGAhk',
        'md5': '04f3b9c841940cc97bcd962cfffbd7c4',
        'sha1': 'cb18e8d96bc510ec79c66145a788363c3aba0311',
        'sha256': 'd8166fbf1b5bf95eba5688dba2635e870785edd987d142ab19529b2cdea17b5a',
      },
      'dob': { 'date': '1998-08-21T20:52:32.926Z', 'age': 23 },
      'registered': { 'date': '2010-09-15T12:44:15.112Z', 'age': 11 },
      'phone': '(113)-300-4850',
      'cell': '(895)-507-7939',
      'id': { 'name': 'SSN', 'value': '538-19-6267' },
      'picture': {
        'large': 'https://randomuser.me/api/portraits/men/64.jpg',
        'medium': 'https://randomuser.me/api/portraits/med/men/64.jpg',
        'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/64.jpg',
      },
      'nat': 'US',
    },
    {
      'gender': 'male',
      'name': { 'title': 'Mr', 'first': 'Justin', 'last': 'Ferguson' },
      'location': {
        'street': { 'number': 8102, 'name': 'Paddock Way' },
        'city': 'Pomona',
        'state': 'Kentucky',
        'country': 'United States',
        'postcode': 14460,
        'coordinates': { 'latitude': '5.5295', 'longitude': '-144.2689' },
        'timezone': { 'offset': '+9:00', 'description': 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk' },
      },
      'email': 'justin.ferguson@example.com',
      'login': {
        'uuid': 'df880ccf-5f86-4d2f-a4ac-d583ec9b50e7',
        'username': 'tinybird487',
        'password': 'target',
        'salt': '3EkN76aa',
        'md5': '6f4a52e97cf35215f46f5f697b9e269b',
        'sha1': 'c2f5dffbcdc4a32f9e726a518253d8fff057e5fd',
        'sha256': '08120c1d4da58125a5de27e81b478fc429b442c53534588384a0222621237643',
      },
      'dob': { 'date': '1957-01-24T07:20:30.463Z', 'age': 64 },
      'registered': { 'date': '2004-02-24T08:31:58.223Z', 'age': 17 },
      'phone': '(390)-608-3410',
      'cell': '(928)-966-1317',
      'id': { 'name': 'SSN', 'value': '205-83-9006' },
      'picture': {
        'large': 'https://randomuser.me/api/portraits/men/55.jpg',
        'medium': 'https://randomuser.me/api/portraits/med/men/55.jpg',
        'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
      },
      'nat': 'US',
    },
  ],
  'info': { 'seed': '7e6d88fff9721917', 'results': 2, 'page': 1, 'version': '1.3' },
}

console.log(res)
const resStr = JSON.stringify(res)
console.log(resStr)
const res1 = JSON.parse(resStr)
console.log(res1)
