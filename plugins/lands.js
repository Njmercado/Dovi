const states = [
  {
    name: 'Antioquia',
    population: '1000000',
    cases: "100000",
    image: {
      src: "map/departamentos/antioquia.png",
      class: "absolute",
      style: "top: 14.7rem; left: 11rem",
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
    name: 'Atlantico',
    population: '1000000',
    cases: "100000",
    image: {
      src: "map/departamentos/atlantico.png",
      class: "absolute",
      style: "top: 5.7rem; left: 11.4rem",
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
      style: "top: 3.5rem; left: 17rem",
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
      style: "top: 10.5rem; left: 13.5rem",
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
      style: "top: 8.8rem; left: 11rem",
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
      style: "top: 10.5rem; left: 9.8rem",
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
      style: "top: 7rem; left: 12.8rem",
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
      style: "top: 16rem; left: 7.1rem",
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
      style: "top: 7rem; left: 15rem",
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
      style: "top: 11rem; left: 16.4rem",
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
      style: "top: 14.5rem; left: 15.4rem",
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
      style: "top: 14.5rem; left: 21rem",
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
      style: "top: 17rem; left: 20rem",
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
      style: "top: 17.4rem; left: 15.8rem",
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
      style: "top: 18.2rem; left: 14rem",
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
      style: "top: 21rem; left: 11.5rem",
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
      style: "top: 20rem; left: 10.3rem",
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
      style: "top: 18.2rem; left: 9.4rem",
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
      style: "top: 18rem; left: 10.8rem",
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
      style: "top: 21.8rem; left: 8rem",
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
      style: "top: 24rem; left: 7.7rem",
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
      style: "top: 26.5rem; left: 5.5rem",
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
      style: "top: 29rem; left: 11rem",
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
      style: "top: 28rem; left: 14rem",
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
      style: "top: 24rem; left: 11rem",
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
      style: "top: 22rem; left: 17rem",
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
      style: "top: 18.5rem; left: 25rem",
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
      style: "top: 380px; left: 410px",
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