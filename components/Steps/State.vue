<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="8" lg="8">
      <Chooser @chosen="chosenItem" :items="listOfStates" label="Departamento"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
import {states} from '../../plugins/lands.js'
export default {
  data: () => ({
    listOfStates: []
  }),
  mounted() {
    states.forEach(item => {
      this.listOfStates.push(item.name.toUpperCase())
    })
  },
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