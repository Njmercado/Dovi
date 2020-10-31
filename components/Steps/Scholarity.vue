<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="6" lg="4">
      <Chooser :items="items" label="estado civil"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
export default {
  data: () => ({
    items: [
      'ANALFABETA',
      'PRIMARIA',
      'SECUNDARIA',
      'SUPERIOR',
      'TECNICO',
      'TECNOLOGO',
    ],
    chosenItem: '',
  }),
  components: {
    Chooser,
  },
}
</script>