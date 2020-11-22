<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="8" lg="8">
      <Chooser @chosen="chosenItem" :items="towns" label="Municipio"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'

export default {
  data: () => ({
    listOfStates: []
  }),
  props: ['towns'],
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