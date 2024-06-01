// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';
// 6 000 00
// 1 100 00
export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'Marrakech',
    address: '7240C Yarcob El Mansour Marrakech, 40000',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1100000',
    agent: {
      image: Agent1,
      name: 'saad Tullert',
      phone: '0645678910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Casablanca',
    address: '798 Sidi Belyout Casablanca, 20000',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1400000',
    agent: {
      image: Agent2,
      name: 'doae Hawker',
      phone: '0645678910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'Rabat',
    address: '2 Diour Jamaa Rabat, 10060',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1700000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0645678910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Rabat',
    address: '84 Quartier de L\'Ocean Rabat, 10052',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '2000000',
    agent: {
      image: Agent4,
      name: 'bochaibe Gonzalez',
      phone: '0645678910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'Marrakech',
    address: '28 Yarcob El Mansour Marrakech, 40000',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '2100000',
    agent: {
      image: Agent5,
      name: 'chaimaa Robinson',
      phone: '0645678910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Casablanca',
    address: '32 Sidi Belyout Casablanca, 20130',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2024',
    price: '2200000',
    agent: {
      image: Agent6,
      name: 'khald Sorensen',
      phone: '0645678910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Casablanca',
    address: '32  Zoulikha Nasri Casablanca, 20250',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2024',
    price: '200000',
    agent: {
      image: Agent7,
      name: 'Jawhara Shamil Naser',
      phone: '0645678910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Marrakech',
    address: '28 Yarcob El Mansour Marrakech, 40000',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2024',
    price: '300000',
    agent: {
      image: Agent8,
      name: 'jana Douglass',
      phone: '0645678910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Marrakech',
    address: '84 Yarcob El Mansour Marrakech, 40000',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2024',
    price: '400000',
    agent: {
      image: Agent9,
      name: 'jilali Schenck',
      phone: '0645678910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Casablanca',
    address: '7240C  Zoulikha Nasri Casablanca, 20250',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2024',
    price: '1170000',
    agent: {
      image: Agent10,
      name: 'lina Levesque',
      phone: '0645678910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Rabat',
    address: '798 Diour Jamaa Rabat, 10060',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '1450000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0645678910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'Marrakech',
    address: '2 Mansour Eddahbi Marrakech, 40000',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2024',
    price: '1390000',
    agent: {
      image: Agent12,
      name: 'brahim Hood',
      phone: '0645678910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Rabat',
    address: '84 Diour Jamaa Rabat, 10060',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2024',
    price: '1800000',
    agent: {
      image: Agent1,
      name: 'youssef Tullert',
      phone: '0645678910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'Marrakech',
    address: '28 Mansour Eddahbi Marrakech, 40000',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2024',
    price: '2130000',
    agent: {
      image: Agent2,
      name: 'hassan Hawker',
      phone: '0645678910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Casablanca',
    address: '32 Maarif Casablanca, 20000',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2024',
    price: '2210000',
    agent: {
      image: Agent3,
      name: 'jamila Smith',
      phone: '0645678910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Casablanca',
    address: '32 Zoulikha Nasri Casablanca, 20250',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2024',
    price: '210000',
    agent: {
      image: Agent4,
      name: 'najlaa Gonzalez',
      phone: '0645678910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Rabat',
    address: '28 Quartier de L\'Ocean Rabat, 10052',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2024',
    price: '320000',
    agent: {
      image: Agent5,
      name: 'hamid Robinson',
      phone: '0645678910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Casablanca',
    address: '84 Sidi Belyout Casablanca, 20000',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '380000',
    agent: {
      image: Agent6,
      name: 'hamida Sorensen',
      phone: '0645678910',
    },
  },
];
