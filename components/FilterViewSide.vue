<template>
  <div id="filter-container">
    <div v-if="currentStep > 0" class="white--text text-h2 font-bold text-center" style="margin-top: 10%">
      {{ step }}
    </div>
    <div class="mt-10">
      <Map v-if="currentStep === 0"></Map>
      <KindOfFilter @filter="setKindOfFilter" v-if="currentStep === 1"></KindOfFilter>
      <div id="listOfFilters" v-if="currentStep === 2">
        <Sex @chosen="setChosenFilterData" v-if="kindOfFilter === 'Sexo'"></Sex>
        <Age @chosen="setChosenFilterData" v-if="kindOfFilter === 'Edad'"></Age>
        <CivilStatus @chosen="setChosenFilterData" v-if="kindOfFilter === 'Estado Civil'"></CivilStatus>
        <Scholarity @chosen="setChosenFilterData" v-if="kindOfFilter === 'Escolaridad'"></Scholarity>
        <EmployeeType @chosen="setChosenFilterData" v-if="kindOfFilter === 'Clase Empleado'"></EmployeeType>
      </div>
      <div id="filterToShowBy" v-if="currentStep === 3">
        <ShowByFilter @show="setChosenShowByFilter"/>
      </div>
    </div>
    <v-row justify="center" align="center" id="action-buttons">
      <v-btn color="secondary" class="text-lowercase" @click="prevStep" rounded :disabled="disablePrev">anterior</v-btn>
      <v-btn color="secondary" class="ml-8 text-lowercase" @click="nextStep" rounded :disabled="disableNext">siguiente</v-btn>
    </v-row>
  </div>
</template>

<script>
import Map from './Steps/Map'
import Sex from './Steps/Sex'
import Age from './Steps/Age'
import CivilStatus from './Steps/CivilStatus'
import Scholarity from './Steps/Scholarity'
import EmployeeType from './Steps/EmployeeType'
import KindOfFilter from './Steps/KindOfFilter'
import ShowByFilter from './Steps/ShowByFilter'
import { apiHandler } from '../plugins/doviAPI'

export default {
  data: () => ({
    filters: [
      'mapa',
      'Filtrar por',
      'Filtro escogido',
      'Mostrar por',
    ],
    kindOfFilter: 'Filtro a usar',
    currentStep: 0,
    disableNext: false,
    disablePrev: true,
  }),
  computed: {
    step() {
      const step = this.$store.state.step.step
      return step
    },
  },
  watch: {
    currentStep(val) {
      this.disablePrevButton(val)
      this.disableNextButton(val)
    }
  },
  methods: {
    setKindOfFilter(val) {
      this.kindOfFilter = val
      this.filters[2] = val
    },
    disableNextButton(val) {
      const filters_len = this.filters.length
      this.disableNext = val >= filters_len - 1
    },
    disablePrevButton(val) {
      this.disablePrev = val <= 0
    },
    nextStep() {
      this.currentStep += 1
      const nextStep = this.filters[this.currentStep]
      this.$store.commit('step/next', nextStep)
    },
    prevStep() {
      this.currentStep -= 1
      const prevStep = this.filters[this.currentStep]
      this.$store.commit('step/next', prevStep)
    },
    setChosenFilterData(val) {
      const chosenFilter = this.filters[2].toLowerCase()
      this.$store.commit(`filter/${chosenFilter}`, val)
    },
    setChosenShowByFilter(val) {
      this.$store.commit(`filter/showBy`, val)

      // Pongo esta función aquí ya que esta es la ultima opción del filtro
      this.sendRequest()
    },
    async sendRequest() {
      const placeData = this.$store.state.filter.filter.place
      const filterData = this.$store.state.filter.filter.filter
      const showBy = this.$store.state.filter.filter.showBy
      const result = await apiHandler({place: placeData, filter: filterData, showBy: showBy})
      this.$store.commit('filter/filterResults', result)
    },
  },
  components: {
    Map,
    Age,
    Sex,
    CivilStatus,
    KindOfFilter,
    ShowByFilter
  },
}
</script>

<style>

  #filter-container {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  #action-buttons{
    position: absolute;
    bottom: 0;
    left: 35%;
  }
</style>