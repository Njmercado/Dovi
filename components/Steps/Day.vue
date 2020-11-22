<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="8" lg="8">
      <Chooser @chosen="chosenItem" :items="items" label="Dia"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
export default {
  data: () => ({
    items: [
    "Viernes",
    "Jueves",
    "Sábado",
    "Miércoles",
    "Martes",
    "Lunes",
    "Domingo"
  ],
  }),
  methods: {
    chosenItem(val) {
      this.$emit('chosen', val)
    }
  },
  components: {
    Chooser,
  },
}
</script>