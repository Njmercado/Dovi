<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="8" lg="8">
      <Chooser @chosen="chosenItem" :items="items" label="arma"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
export default {
  data: () => ({
    items: [
      'ARMA BLANCA \/ CORTOPUNZANTE',
      'CONTUNDENTES',
      'SIN EMPLEO DE ARMAS',
      'NO REPORTADO',
      'ARMA DE FUEGO',
    ],
  }),
  methods: {
    chosenItem(val) {
      this.$emit('chosen', val)
    },
  },
  components: {
    Chooser,
  },
}
</script>