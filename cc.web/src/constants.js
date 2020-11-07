// Place your constants here
const NO_DELIVERY_POSTAL_CODES = {
  793: 'meghalaya',
  795: 'manipur',
  796: 'mizoram',
  797: 'nagaland',
  798: 'nagaland',
  682: 'lakshadweep',
  18: 'jammu & kashmir',
  19: 'jammu & kashmir',
  744: 'andaman & nicobar islands'
}

const ALLOWED_DELIVERY_POSTAL_CODES = {
  160: ['chandigarh'],
  396: ['daman & diu', 'dadra & nagar haveli'],
  403: ['goa'],
  609: ['puducherry'],
  737: ['sikkim'],
  11: ['delhi'],
  56: ['karnataka'],
  57: ['karnataka'],
  58: ['karnataka'],
  59: ['karnataka'],
  80: ['bihar'],
  81: ['bihar'],
  82: ['bihar'],
  83: ['bihar'],
  84: ['bihar'],
  85: ['bihar'],
  70: ['west bengal'],
  71: ['west bengal'],
  72: ['west bengal'],
  73: ['west bengal'],
  74: ['west bengal'],
  75: ['orissa'],
  76: ['orissa'],
  77: ['orissa']
}

const INDIA_STATE_UT_LIST = [
  'Andaman & Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra & Nagar Haveli',
  'Daman & Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal'
]

const INDIA_DELIVERY_COST_LIST = {
  'Andhra Pradesh': 60,
  'Arunachal Pradesh': 75,
  'Assam': 75,
  'Bihar': 65,
  'Chandigarh': 65,
  'Chhattisgarh': 65,
  'Dadra & Nagar Haveli': 60,
  'Daman & Diu': 65,
  'Delhi': 75,
  'Goa': 65,
  'Gujarat': 65,
  'Haryana': 65,
  'Himachal Pradesh': 80,
  'Jharkhand': 75,
  'Karnataka': 80,
  'Kerala': 80,
  'Madhya Pradesh': 80,
  'Maharashtra': 80,
  'Odisha': 45,
  'Puducherry': 80,
  'Punjab': 80,
  'Rajasthan': 80,
  'Sikkim': 80,
  'Tamil Nadu': 80,
  'Telangana': 65,
  'Tripura': 80,
  'Uttarakhand': 80,
  'Uttar Pradesh': 80,
  'West Bengal': 57
};

const TESTIMONIALS = [
  {
    name: "Arka Naskar",
    description: "Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! ",
    rating: 4
  },
  {
    name: "Prashant Shubham",
    description: "Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen!Probably the most random thing you have ever seen! Probably the most random thing you have ever seen!Probably the most random thing you have ever seen! Probably the most random thing you have ever seen!Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen!",
    rating: 3
  }
];

const INSTAGRAM_URL = 'https://www.instagram.com/thecocorush/',
  FACEBOOK_URL = 'https://www.facebook.com/thecocorush',
  INR_SYMBOL = '₹',
  BASE_URL = 'http://localhost:8080',
  CATEGORIES = ['nutties', 'truffle', 'bars', 'special', 'baskets', 'hampers', 'chocolate beans']

export {
  NO_DELIVERY_POSTAL_CODES,
  ALLOWED_DELIVERY_POSTAL_CODES,
  INDIA_STATE_UT_LIST,
  INDIA_DELIVERY_COST_LIST,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  INR_SYMBOL,
  BASE_URL,
  TESTIMONIALS,
  CATEGORIES,
};
