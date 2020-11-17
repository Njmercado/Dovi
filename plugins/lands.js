const states = [
  {
    name: 'Antioquia',
    population: '6768388',
    cases: "39278",
    image: {
      src: "map/departamentos/antioquia.png",
      class: "absolute",
      style: "top: 35%; left: 34%",
      width: "10.8rem"
    },
    childs: [//ciites
      {
        name: 'Medellin',
        population: '500000',
        cases: "50000",
        childs: [//neightborhods
          {
            name: 'La Arboleda',
            population: '100000',
            cases: "5000",
          },
        ],
      },
    ],
  },
  {
    name: 'Atlántico',
    population: '2573591',
    cases: "11302",
    image: {
      src: "map/departamentos/atlantico.png",
      class: "absolute",
      style: "top: 12%; left: 36%",
      width: "3.5rem"
    },
    childs: [//ciites
      {
        name: 'Barranquilla',
        population: '500000',
        cases: "50000",
        childs: [//neightborhods
          {
            name: 'Simon Bolivar',
            population: '100000',
            cases: "5000",
          },
        ],
      },
    ],
  },
  {
    name: 'Guajira',
    population: '1067063',
    cases: "2038",
    image: {
      src: "map/departamentos/guajira.png",
      class: "absolute",
      style: "top: 7%; left: 50%",
      width: "9rem"
    },
    childs: [//ciites
      {
        name: 'Rioacha',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Maruano',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Bolívar',
    population: '2195495',
    cases: "8995",
    image: {
      src: "map/departamentos/bolivar.png",
      class: "absolute",
      style: "top: 24%; left: 41%",
      width: "11.5rem"
    },
    childs: [//ciites
      {
        name: 'Cartagena',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Bazurto',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Sucre',
    population: '885835',
    cases: "4976",
    image: {
      src: "map/departamentos/sucre.png",
      class: "absolute",
      style: "top: 20%; left: 35%",
      width: "5.2rem"
    },
    childs: [//ciites
      {
        name: 'Cartagena',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Bazurto',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Córdoba',
    population: '1813854',
    cases: "5537",
    image: {
      src: "map/departamentos/cordoba.png",
      class: "absolute",
      style: "top: 25%; left: 32%",
      width: "6rem"
    },
    childs: [//ciites
      {
        name: 'Cartagena',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Bazurto',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Magdalena',
    population: '1312428',
    cases: "5582",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 15%; left: 39.5%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Chocó',
    population: '520296',
    cases: "817",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 40%; left: 26%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Cesar',
    population: '1077770',
    cases: "3197",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 16%; left: 45%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Norte de Santander',
    population: '1402695',
    cases: "8571",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 26%; left: 49%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Santander',
    population: '2100704',
    cases: "21610",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 35%; left: 45%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Arauca',
    population: '273321',
    cases: "1674",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 34%; left: 60%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Casanare',
    population: '381554',
    cases: "2971",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 42%; left: 57%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Boyacá',
    population: '1284375',
    cases: "14427",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 41%; left: 48%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Cundinamarca',
    population: '2845668',
    cases: "115075",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 45%; left: 41%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Tolima',
    population: '1423715',
    cases: "8547",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 50%; left: 36%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Quindío',
    population: '578268',
    cases: "2219",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 47.5%; left: 33%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Risaralda',
    population: '972978',
    cases: "8281",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 43.5%; left: 31%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Caldas',
    population: '995822',
    cases: "4041",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 43%; left: 35%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Cauca',
    population: '1426938',
    cases: "8429",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 52%; left: 28%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Valle',
    population: '4804489',
    cases: "34439",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 59%; left: 27%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Nariño',
    population: '1830473',
    cases: "9724",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 64%; left: 21%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Putumayo',
    population: '363597',
    cases: "1366",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 71%; left: 35%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Caquetá',
    population: '502410',
    cases: "2343",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 69%; left: 45%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Huila',
    population: '1211163',
    cases: "9317",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 57%; left: 35%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Meta',
    population: '1035256',
    cases: "10274",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 54%; left: 48%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Vichada',
    population: '79134',
    cases: "194",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 44%; left: 68%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Guainía',
    population: '44134',
    cases: "227",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 56%; left: 73%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Guaviare',
    population: '117494',
    cases: "397",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 61%; left: 54%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Vaupés',
    population: '45367',
    cases: "210",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 68%; left: 62%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
  {
    name: 'Amazonas',
    population: '79739',
    cases: "710",
    image: {
      src: "map/departamentos/magdalena.png",
      class: "absolute",
      style: "top: 80%; left: 60%",
      width: "8rem"
    },
    childs: [//ciites
      {
        name: 'Santa Marta',
        population: '5000000',
        cases: "510000",
        childs: [ //neightborhoods
          {
            name: 'Aguas 10',
            population: '1000000',
            cases: "10000",
          },
        ],
      },
    ],
  },
]

module.exports = {
  states
}