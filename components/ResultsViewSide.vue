<template>
  <div>
    <v-row justify="space-between" align="center" class="px-8">
      <v-img style="cursor: pointer" @click="openHome" src="logo.png" max-width="20%" contain></v-img>
      <div>
        <v-btn :color="$vuetify.theme.themes['light'].background" @click="openPredict" class="text-lowercase white--text" rounded>predecir</v-btn>
        <v-btn
          :color="$vuetify.theme.themes['light'].background"
          class="text-lowercase white--text"
          rounded @click="openInfoModal = !openInfoModal"
        >sobre nosotros</v-btn>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="min-height: 85vh">
      <LineChart
        v-if="loaded && chart === 'line'"
        :key="Math.random()*(1000-10)+10"
        :chartData="chartdata"></LineChart>
      <BarChart
        v-if="loaded && chart === 'bar'"
        :key="Math.random()*(1000-10)+10"
        :chartData="chartdata"></BarChart>
      <DonutChart
        v-if="loaded && chart === 'donut'"
        :key="Math.random()*(1000-10)+10"
        :chartData="chartdata"></DonutChart>
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
            '#E07777',
            "#F27E63",
            "#D95284",
            "#F2E205",
            "#510273",
            "#F20505",
            "#82346A",
            "#A64444",
            "#F29F80",
            "#238C2A",
            "#8C3B70",
            "#E34F33",
            "#F1A90E",
            "#82D9D9",
            "#0896A6",
            "#D9486E",
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
      if(data[0].length >= 10) this.chart = 'line'
      else if(data[0].length >= 5) this.chart = 'bar'
      else this.chart = 'donut'
      this.chartdata.labels = data[0] 
      this.chartdata.datasets[0].data = data[1] 
    },
    openPredict() {
      this.$router.push('/predecir')
    },
    openHome() {
      location.reload()
    }
  },
  components: {
    LineChart,
    DonutChart,
    BarChart,
  },
}
</script>
