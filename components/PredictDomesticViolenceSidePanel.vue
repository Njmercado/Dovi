<template>
  <div>
    <v-navigation-drawer id="drawer" right absolute temporary v-model="openNavigation" :color="$vuetify.theme.themes['light'].secondary">
      <!-- Fields to predict another one -->
      <div style="text-align: left"  class="text-h4 font-weight-bold white--text"> Predecir Violencia Intrafamiliar</div>
      <v-col style="margin-top: 10px">
        <State v-if="step === 0" @chosen="setState"></State>
        <Town v-if="step === 1" :towns="towns" @chosen="setTown"></Town>
        <Neighborhood v-if="step === 2" :neighborhoods="neighborhoods" @chosen="setNeighborhood"></Neighborhood>
        <Day v-if="step === 3" @begin="setDay"></Day>
        <Age v-if="step === 4" :only="true" @begin="setAge"></Age>
        <Sex v-if="step === 5" @chosen="setSex"></Sex>
        <Place v-if="step === 6" @chosen="setPlace"></Place>
      </v-col>
      <!-- Action buttons -->
      <v-row justify="center" class="mt-14" style="position: absolute; bottom: 10%; left: 37%">
        <v-btn
          :color="$vuetify.theme.themes['light'].background"
          class="text-lowercase white--text"
          @click="beforeStep"
          rounded>regresar</v-btn>
        <v-btn
          v-if="step < 6"
          :color="$vuetify.theme.themes['light'].background"
          class="text-lowercase white--text ml-5"
          @click="nextStep"
          rounded>siguiente</v-btn>
        <v-btn
          v-if="step >= 6"
          :color="$vuetify.theme.themes['light'].background"
          class="text-lowercase white--text ml-5"
          @click="predict"
          rounded>predecir</v-btn>
      </v-row>
    </v-navigation-drawer>
    <PredictDomesticViolenceInfoModal
      :open="openModal"
      :data="modalData"
    ></PredictDomesticViolenceInfoModal>
  </div>
</template>

<script>
import Sex from './Steps/Sex'
import Age from './Steps/Age'
import State from './Steps/State'
import Town from './Steps/Town'
import Neighborhood from './Steps/Neighborhood'
import Place from './Steps/Place'
import Day from './Steps/Day'

import { predictDomesticViolence, towns, neighborhoods } from '../plugins/doviAPI'
import PredictFieldInfoModal from './PredictFieldInfoModal'

export default {
  data: () => ({
    chosenFieldToPredict: '',
    showFields: false,
    openModal: false,
    modalData: '',
    openNavigation: false,
    step: 0,
    filterData: {
      age: -1,
      sex: '-',
      place: '-',
      state: '-',
      town: '-',
      neighborhood: '-',
      day: '-'
    },
    towns: [],
    neighborhoods: [],
  }),
  props: {
    open: { type: Boolean },
  },
  methods: {
    setState(val) {
      this.filterData.state = val
    },
    setTown(val) {
      this.filterData.town = val
    },
    setNeighborhood(val) {
      this.filterData.neighborhood= val
    },
    setAge(val) {
      this.filterData.age = parseInt(val)
    },
    setSex(val) {
      this.filterData.sex = val
    },
    setDay(val) {
      this.filterData.day = val
    },
    setPlace(val) {
      this.filterData.place = val
    },
    async predict() {
      const data = {
        state: this.filterData.state,
        town: this.filterData.town,
        neighborhood: this.filterData.neighborhood,
        age: this.filterData.age,
        sex: this.filterData.sex,
        day: this.filterData.day,
        place: this.filterData.place,
      }

      const result = await predictDomesticViolence(data)
      this.modalData = await result.data
      this.openModal = await !this.openModal
    },
    beforeStep() {
      this.step -= 1
    },
    nextStep() {
      this.step += 1
      if(this.step === 1) this.getTowns(this.filterData.state)
      if(this.step === 2) this.getNeighborhoods(this.filterData.town)
    },
    async getTowns(state) {
      const response = await towns(state)
      this.towns = []
      await response.forEach(item => {
        this.towns.push(item.name)
      })
    },
    async getNeighborhoods(town) {
      const response = await neighborhoods(this.filterData.state, town)
      this.neighborhoods = []
      await response.forEach(item => {
        this.neighborhoods.push(item.name)
      })
    }
  },
  watch: {
    open(val) {
      this.openNavigation = this.openNavigation ? this.openNavigation : true
    },
  },
}
</script>

<style scoped>
#information {
  padding: 12px;
  text-align: left;
}

#drawer {
  padding: 32px 16px;
}
@media screen and (min-width: 650px) {
  #drawer {
    min-width: 50vw;
  }
}
</style>