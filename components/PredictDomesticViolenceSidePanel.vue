<template>
  <div>
    <v-navigation-drawer id="drawer" right absolute temporary v-model="openNavigation" :color="$vuetify.theme.themes['light'].secondary">
      <!-- Fields to predict another one -->
      <div v-if="!fieldsHasBeenChosen" style="display: flex; flex-direction: column;">
        <div style="text-align: left"  class="text-h4 font-weight-bold white--text"> Selecciona los campo a usar </div>

        <v-row justify="space-around" class="mt-15">
          <v-card style="border-radius: 16px">
            <v-card-title>Lugar</v-card-title>
            <v-card-text>
              <v-checkbox v-model="chosenFields.place.state" label="Departamento"></v-checkbox>
              <v-checkbox v-model="chosenFields.place.town" label="Municipio"></v-checkbox>
              <v-checkbox v-model="chosenFields.place.neighborhood" label="Barrio"></v-checkbox>
            </v-card-text>
          </v-card>
          <v-card style="border-radius: 16px">
            <v-card-title>Campos extras</v-card-title>
            <v-card-text>
              <v-checkbox v-model="chosenFields.extraFields.day" label="Dia"></v-checkbox>
              <v-checkbox v-model="chosenFields.extraFields.age" label="Edad"></v-checkbox>
              <v-checkbox v-model="chosenFields.extraFields.sex" label="Sexo"></v-checkbox>
              <v-checkbox v-model="chosenFields.extraFields.place" label="Lugar"></v-checkbox>
            </v-card-text>
          </v-card>
        </v-row> 
        <v-alert
          :value="openAlert"
          dense
          type="warning"
          transition="scale-transition"
          style="margin-top: 25px"
          border="bottom">Debes seleccionar al menos un campo</v-alert>
        <v-row justify="center" style="position: absolute; bottom: 2%; left: 32%">
          <v-btn
            :color="$vuetify.theme.themes['light'].background"
            class="text-lowercase white--text ml-5"
            @click="finishFieldsSelection"
            rounded>finalizar seleccion</v-btn>
        </v-row>
      </div>
      <div v-if="fieldsHasBeenChosen">
        <div style="text-align: left"  class="text-h4 font-weight-bold white--text"> Predecir Violencia Intrafamiliar</div>
        <v-col style="margin-top: 10px">
          <State v-if="listOfFinalChosenFields[step] === 'state'" @chosen="setState"></State>
          <Town v-if="listOfFinalChosenFields[step] === 'town'" :towns="towns" @chosen="setTown"></Town>
          <Neighborhood v-if="listOfFinalChosenFields[step] === 'neighborhood'" :neighborhoods="neighborhoods" @chosen="setNeighborhood"></Neighborhood>
          <Day v-if="listOfFinalChosenFields[step] === 'day'" @begin="setDay"></Day>
          <Age v-if="listOfFinalChosenFields[step] === 'age'" :only="true" @begin="setAge"></Age>
          <Sex v-if="listOfFinalChosenFields[step] === 'sex'" @chosen="setSex"></Sex>
          <Place v-if="listOfFinalChosenFields[step] === 'place'" @chosen="setPlace"></Place>
        </v-col>
        <!-- Action buttons -->
        <v-row justify="center" class="mt-14" style="position: absolute; bottom: 10%; left: 37%">
          <v-btn
            :color="$vuetify.theme.themes['light'].background"
            class="text-lowercase white--text"
            @click="beforeStep"
            rounded>regresar</v-btn>
          <v-btn
            v-if="step < listOfFinalChosenFields.length - 1"
            :color="$vuetify.theme.themes['light'].background"
            class="text-lowercase white--text ml-5"
            @click="nextStep"
            rounded>siguiente</v-btn>
          <v-btn
            v-if="step >= listOfFinalChosenFields.length - 1"
            :color="$vuetify.theme.themes['light'].background"
            class="text-lowercase white--text ml-5"
            @click="predict"
            rounded>predecir</v-btn>
        </v-row>
      </div>
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
    openAlert: false,
    openNavigation: false,
    step: 0,
    fieldsHasBeenChosen: false,
    listOfFinalChosenFields: [],
    chosenFields: {
      place: {
        state: false,
        town: false,
        neighborhood: false,
      },
      extraFields: {
        age: false,
        sex: false,
        place: false,
        day: false,
      }
    },
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
    cleanFields() {
      this.filterData = {
        age: -1,
        sex: '-',
        place: '-',
        state: '-',
        town: '-',
        neighborhood: '-',
        day: '-'
      }
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
      if(this.step <= 0 ) {
        this.step = 0
        this.cleanFields()
        this.fieldsHasBeenChosen = false
      }
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
    },
    isThereFieldsChosen() {
      let error = true
      if(this.chosenFields.place.state) error = false 
      if(this.chosenFields.place.town) error = false
      if(this.chosenFields.place.neighborhood) error = false
      if(this.chosenFields.extraFields.age) error = false
      if(this.chosenFields.extraFields.sex) error = false
      if(this.chosenFields.extraFields.place) error = false
      if(this.chosenFields.extraFields.day) error = false
      return error
    },
    async getChosenFieldsAsArray() {
      const chosenPlaces = await Object.keys(this.chosenFields.place).filter(key => {
        if(this.chosenFields.place[key]) return key
      })

      const chosenExtraFields = await Object.keys(this.chosenFields.extraFields).filter(key => {
        if(this.chosenFields.extraFields[key]) return key
      })

      return chosenPlaces.concat(chosenExtraFields)
    },
    async finishFieldsSelection(){
      const error = this.isThereFieldsChosen()
      if(error) {
        this.openAlert = !this.openAlert
        setTimeout(() => {
          this.openAlert = !this.openAlert
        }, 3000);
      } else {
        this.listOfFinalChosenFields = await this.getChosenFieldsAsArray()
        this.fieldsHasBeenChosen = true
      }
    },
  },
  watch: {
    open(val) {
      this.openNavigation = this.openNavigation ? this.openNavigation : true
    },
    'chosenFields.place.state': function(val) {
      const town = this.chosenFields.place.town
      if(val && !town) {
        this.chosenFields.place.neighborhood = false
      } else if(!val) {
        this.chosenFields.place.town = false
      }
    },
    'chosenFields.place.town': function(val) {
      const neigh = this.chosenFields.place.neighborhood
      if(val && !neigh) {
        this.chosenFields.place.state = true
      } else if(!val) {
        this.chosenFields.place.neighborhood = false
      }
    },   
    'chosenFields.place.neighborhood': function(val) {
      if(val) {
        this.chosenFields.place.town = true
        this.chosenFields.place.state = true
      }
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