let seedData = [
  {
    name: 'Capriccio Cafe',
    image:
      'data:image/jpeg;base64,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',
    address: '189 Bedford St',
    theme: ['Italian'],
    menu: {
      item1: {
        item: 'Pineapple Apple Mango Smoothie',
        price: 7
      },
      item2: {
        item: 'Capriccio Salad',
        price: 10
      },
      item3: {
        item: 'Spagetti al Pomodoro',
        price: 15
      }
    },
    like: 1,
    url: 'https://capriccio-cafe.com',
    phone: '917-905-3099'
  },

  {
    name: 'Lam’s Kitchen',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS069YYMVb5q6lB7AzJbzoXhNsmB0068kP2dvfEgCki1reWRBmP_Q',
    address: '168 Richmond Hill Ave',
    theme: ['Asian'],
    menu: {
      item1: {
        item: 'Fried Dumpling',
        price: 7
      },
      item2: {
        item: 'Chicken Fried Rice',
        price: 7.75
      },
      item3: {
        item: 'Pork Roast with Broccoli',
        price: 9.75
      }
    },
    like: 1,
    url: 'https://lamskitchenstamfordct.com/17851',
    phone: '917-905-2934'
  },

  {
    name: 'Casa Villa',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TBY_EuqhULdi9EwuhOoMj6CB0hpg4O6m2pqULTwjJMEptHWc',
    address: '182 West Main St',
    theme: ['Spanish'],
    menu: {
      item1: {
        item: 'Fajitas',
        price: 15
      },
      item2: {
        item: 'Quesadilla de Pollo',
        price: 13
      },
      item3: {
        item: 'Camarones a la Diabla',
        price: 15
      }
    },
    like: 1,
    url: 'https://www.casavillarestaurant.com',
    phone: '917-905-1831'
  },
  {
    name: 'Blue Cactus Grill',
    image:
      'https://res.cloudinary.com/gonation/w_600,c_fit,fl_lossy,f_auto,q_auto/gonation.data.prod/rjypyiye5uxgmtjlwsuu',
    address: '51 Stevens Street, Norwalk CT',
    theme: ['American'],
    menu: {
      item1: {
        item: 'Philly Cheesesteak',
        price: 10
      },
      item2: {
        item: 'Fajita Wrap',
        price: 8
      },
      item3: {
        item: 'Cheeseburger',
        price: 9
      }
    },
    like: 1,
    url: 'https://bluecactusgrillct.com/',
    phone: '203-838-8800'
  },
  {
    name: 'Garden Catering',
    image:
      'data:image/jpeg;base64,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',
    address: '235 Main St, Stamford, CT 0690',
    theme: ['American'],
    menu: {
      item1: {
        item: 'Special',
        price: 7.99
      },
      item2: {
        item: 'Cones',
        price: 4.99
      },
      item3: {
        item: 'Hotsy',
        price: 8
      }
    },
    like: 1,
    url: 'https://www.gardencatering.com/',
    phone: '(203) 487-0333'
  },
  {
    name: 'Fiesta Atlantic',
    image:
     'https://static1.squarespace.com/static/55ce1e48e4b06614877a8bfb/t/563c14e0e4b0edcbe1388ce6/1342903326297/1000w/EO_Fiesta_Americana_Stamford_2.jpg',
    address: '249 Main St, Stamford, CT 06901',
    theme: ['Mexican'],
    menu: {
      item1: {
        item: 'Arroz con chaufe',
        price: 12
      },
      item2: {
        item: 'Ceviche',
        price: 8
      },
      item3: {
        item: 'Lomo Saltado',
        price: 8
      }
    },
    like: 1,
    url: 'fiestaonmainct.com/menus',
    phone: '(203) 323-4300'
  },
  {
    name: 'Table 104',
    
    image:'https://www.washingtonpost.com/resizer/M-WnldvRmvg3qyWg0Om8ssM6E3M=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UM4VXMMJ5Y7T5MPQALWPL73RGM.jpg',
    address: '299 Long Ridge Rd, Stamford, CT 06902',
    theme: ['Italian'],
    menu: {
      item1: {
        item: 'ZUPPA Cauliflower Vellutata, Toasted Pistachio, Crispy Grana ',
        price: 7
      },
      item2: {
        item: 'KOBE BEEF BURGER Tomato, Red Onions, Gorgonzola Dolce, 104 Fries',
        price: 17
      },
      item3: {
        item: 'HELL Sopressata, Long Hots, Plum Tomato, House Made Mozzarella ',
        price: 14
      }
    },
    like: 1,
    url: 'https://www.table104stamford.com/',
    phone: '(203) 388-8898'
  },
  {
    name: 'Colony ',
    image:
     'https://lh5.googleusercontent.com/p/AF1QipP4jyRrC4hLu-8j09m1FxjyK19BjW5IX_VCHQGe=w213-h160-k-no',
    address: ' 172 Myrtle Ave, Stamford, CT 06902',
    theme: ['Italian'],
    menu: {
      item1: {
        item: ' Hot oil pizza with sausage and peppers',
        price: 12
      },
      item2: {
        item: 'Salad Pizza',
        price: 13
      },
      item3: {
        item: 'Hot oil Pizza with bacon ',
        price: 14
      }
    },
    like: 1,
    url: 'https://www.colonygrill.com/',
    phone: '(203) 359-2184'
  },
  {
    name: 'Mcdonalds',
    image:
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB81HhJ85SRg5JQzTFvyy2TMOtw3H85Gv0vpI3yYw7aLHBYHnN',
    address: ' 25 bedford st, Stamford, CT 06902',
    theme: ['American'],
    menu: {
      item1: {
        item: 'McChicken',
        price: 1.09
      },
      item2: {
        item: 'Double cheese burger',
        price: 2
      },
      item3: {
        item: 'French fries ',
        price: 2.75
      }
    },
    like: 1,
    url: 'https://www.mcdonalds.com/',
    phone: '(203) 456-2184'
  }
];

module.exports = seedData;
