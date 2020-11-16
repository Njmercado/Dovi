<template>
  <div>
    <v-row justify="space-between" align="center" class="px-8">
      <v-img src="logo.png" max-width="20%" contain></v-img>
      <div>
        <v-btn :color="$vuetify.theme.themes['light'].background" class="text-lowercase white--text" rounded>predecir</v-btn>
        <v-btn
          :color="$vuetify.theme.themes['light'].background"
          class="text-lowercase white--text"
          rounded @click="openInfoModal = !openInfoModal"
        >sobre nosotros</v-btn>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="min-height: 85vh">
      <LineChart v-if="loaded && chart === 'line'" :chartData="chartdata"></LineChart>
      <BarChart v-if="loaded && chart === 'bar'" :chartData="chartdata"></BarChart>
      <DonutChart v-if="loaded && chart === 'donut'" :chartData="chartdata"></DonutChart>
    </v-row>
    <SidePanel :open="openInfoModal"></SidePanel>
  </div>
</template>

<script>
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import DonutChart from './charts/DonutChart'
import { casesByCountry } from '../plugins/doviAPI'
import SidePanel from '../components/SidePanel'

export default {
  data: () => ({
    openInfoModal: false,
    loaded: false,
    chart: 'donut',
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'Colombia',
          backgroundColor: [
            '#67BE9E',
            '#514FCD',
            '#E07777'
          ],
          data: [],
        },
      ],
    },
  }),
  watch: {
    '$store.state.filter.filter.results': function() {
      this.resetChartData(this.$store.state.filter.filter.results.data)
    }
  },
  async mounted(){
    const result = await casesByCountry('Sex')
    this.resetChartData(result.data)
    this.loaded = true
  },
  methods: {
    resetChartData(data) {
      if(data[0].length >= 5) this.chart = 'bar'
      if(data[0].length >= 15) this.chart = 'line'
      else this.chart = 'donut'
      this.chartdata.labels = data[0] 
      this.chartdata.datasets[0].data = data[1] 
    }
  },
  components: {
    LineChart,
    DonutChart,
    BarChart,
  },
}
</script>
