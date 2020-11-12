<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="8" lg="8">
      <Chooser @chosen="chosenItem" :items="items" label="filtro"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
export default {
  data: () => ({
    items: [
      'Sexo',
      'Edad',
      'Escolaridad',
      'Estado Civil',
      'Arma',
      'Clase Empleado'
    ],
  }),
  methods: {
    chosenItem(val) {
      this.$emit('filter', val)
    }
  },
  components: {
    Chooser,
  },
}
</script>