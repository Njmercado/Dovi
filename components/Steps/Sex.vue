<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="6" lg="4">
      <Chooser :items="items" label="sexo"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
export default {
  data: () => ({
    items: ['Hombre', 'Mujer', 'Otro', 'Hombre', 'Mujer', 'Otro'],
    chosenItem: '',
  }),
  components: {
    Chooser
  }
}
</script>