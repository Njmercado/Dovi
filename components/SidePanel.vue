<template>
  <v-navigation-drawer id="drawer" absolute temporary v-model="openNavigation">
    <div style="text-align: left" class="text-h4 font-weight-bold">
      Información
    </div>
    <div id="information">
      Somos un grupo de amigos, entusiastas del desarrollo y la innovación. Este
      proyecto es el resultado del arduo trabajo realizado durante 4 meses,
      brindando una herramienta sencilla, pero sofisticada, que te permitirá
      visualizar estadistica, y predictivamente, los casos de
      <strong>Violencia Intrafamiliar</strong> en Colombia desde el año
      <strong>2014</strong> hasta el año <strong>2019</strong>. Con esta
      herramienta serás capaz de asimilar todos los casos, registrados, mediante
      diversidad de filtros y lugares, dando así una mayor visibilidad de la
      problematica actual. <br />
      Esta herramienta tambien cuenta con un sistema predictivo que te permitirá
      conocer, según algunas caracteristicas, si una persona puede ser victima
      de violencia, ademas de brindar la posibilidad de predecir caracteriscas,
      no conocidas, a partir de las ya dadas.
    </div>
    <v-row
      justify="center"
      align="center"
      style="position: absolute; bottom: 10%"
    >
      <v-col class="card-container" v-for="(item, index) in owners" :key="index" xs="6" sm="6" md="4" lg="4">
        <v-card color="#514FCD" style="border-radius: 16px; color: white">
          <div class="info">
            <v-card-text @click="openGithub(item.github)">GitHub</v-card-text>
            <v-card-text @click="openLinkedin(item.linkedin)">Linkedin</v-card-text>
          </div>
          <div class="card">
            <v-card-title>
              <v-avatar class="mt-4 ml-4 mr-4" size="128">
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </v-card-title>
            <div class="font-weight-bold">{{ item.name }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    openNavigation: false,
    owners: [
      {
        name: 'Nino Mercado',
        image:
          'https://avatars2.githubusercontent.com/u/26421737?s=460&u=0f285470742b3baa7cbc527d75342eec9681b3d0&v=4',
        github: "https://github.com/njmercado",
        linkedin: "https://www.linkedin.com/in/nino-mercado-48b513147/"
      },
      {
        name: 'Abraham Lugo',
        image:
          'https://avatars3.githubusercontent.com/u/48779532?s=460&u=5e5a418e601b7fa94a23d285b1b008b3731fbc04&v=4',
        github: "https://github.com/AbrahamLugoRamirez",
        linkedin: "https://www.linkedin.com/in/abraham-lugo-ramirez-b63a6618b/"
      },
      {
        name: 'Kebin Ramirez',
        image:
          'https://avatars0.githubusercontent.com/u/25647105?s=460&u=2258b47f548dbed25a0050663bcf612bce7dcfa3&v=4',
        github: "https://github.com/kebinRamirez",
        linkedin: "https://www.linkedin.com/in/kebin-ramirez-gomez-873b3a1bb"
      },
    ],
  }),
  props: {
    open: { type: Boolean },
  },
  watch: {
    open(val) {
      this.openNavigation = this.openNavigation ? this.openNavigation : true
    },
  },
  methods: {
    openGithub(val) {
      window.open(val, '_blank')
    },
    openLinkedin(val) {
      window.open(val, '_blank')
    },
  }
}
</script>

<style scoped>
#information {
  padding: 12px;
  /* text-align: left; */
  text-align:justify;
  text-justify: inter-word;
}

#drawer {
  padding: 32px 16px;
}
@media screen and (min-width: 650px) {
  #drawer {
    min-width: 50%;
  }
}

.card {
  display: block;
  position: relative;
}

.card-container:hover .info {
  flex-direction: column;
  justify-content: center;
  opacity: 1;
}

.info {
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  transition-property: opacity;
  transition-duration: .5s;
}
</style>