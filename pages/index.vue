<template>
  <v-row>
    <v-col
      xs="12" sm="12" md="6" lg="6" xl="6"
      :style="{
        background: $vuetify.theme.themes['light'].background,
        minHeight: '100vh',
      }"
    >
      <FilterViewSide></FilterViewSide>
    </v-col>
    <v-col
      justify="center" align="center" xs="12" sm="12" md="6" lg="6" xl="6"
      style="background-color: white; min-height: 100vh"
    >
      <ResultsViewSide></ResultsViewSide>
    </v-col>
  </v-row>
</template>

<script>
import ResultsViewSide from '../components/ResultsViewSide'
import FilterViewSide from '../components/FilterViewSide'

export default {
  components: {
    FilterViewSide,
    ResultsViewSide,
  },
}
</script>
