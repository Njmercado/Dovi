<template>
  <div>
    <v-row justify="space-between" align="center" class="px-8">
      <div class="text-h3" :style="{ color: $vuetify.theme.themes['light'].background }">Dovi</div>
      <div>
        <v-btn :color="$vuetify.theme.themes['light'].background" class="text-lowercase white--text" rounded>predecir</v-btn>
        <v-btn :color="$vuetify.theme.themes['light'].background" class="text-lowercase white--text" rounded >información</v-btn>
      </div>
    </v-row>
    <v-row justify="center" align="center" style="min-height: 85vh">
      <!-- <LineChart></LineChart> -->
      <DonutChart v-if="loaded" :chartData="chartdata"></DonutChart>
    </v-row>
  </div>
</template>

<script>
import LineChart from './charts/LineChart'
import DonutChart from './charts/DonutChart'
import { allCases } from '../plugins/doviAPI'

export default {
  data: () => ({
    loaded: false,
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
    '$store.state.filter.filter.filterResults': function() {
      this.resetChartData(this.$store.state.filter.filter.filterResults.data)
    }
  },
  async mounted(){
    const result = await allCases()
    this.resetChartData(result.data)
    this.loaded = true
  },
  methods: {
    resetChartData(data) {
      console.log(data)
      this.chartdata.labels = data[0] 
      this.chartdata.datasets[0].data = data[1] 
    }
  },
  components: {
    LineChart,
    DonutChart,
  },
}
</script>
