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
      'Sexo',
      'Arma',
    ],
  }),
  methods: {
    chosenItem(val) {
      if(val === 'Dia') val = 'DayName'
      if(val === 'Mes') val = 'Month'
      if(val === 'Sexo') val = 'Sex'
      if(val === 'Arma') val = 'Weapon'
      this.$emit('show', val)
    }
  },
  components: {
    Chooser,
  },
}
</script>