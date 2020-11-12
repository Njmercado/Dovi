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
      'Dia',
      'Mes',
      'Sexo'
    ],
  }),
  methods: {
    chosenItem(val) {
      this.$emit('show', val)
    }
  },
  components: {
    Chooser,
  },
}
</script>