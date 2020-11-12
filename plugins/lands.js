const states = [
  {
    name: 'Antioquia',
    population: '1000000',
    cases: "100000",
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
    population: '1000000',
    cases: "100000",
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
    population: '10000000',
    cases: "5000000",
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
    name: 'Bolivar',
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    name: 'Cordoba',
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    name: 'Quindio',
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    name: 'Valle del Cauca',
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    name: 'Guainia',
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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
    name: 'Vaupes',
    population: '10000000',
    cases: "5000000",
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
    population: '10000000',
    cases: "5000000",
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