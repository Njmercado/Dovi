<template>
  <div>
    <v-navigation-drawer id="drawer" right absolute temporary v-model="openNavigation" :color="$vuetify.theme.themes['light'].secondary">
      <div v-if="!showFields" style="text-align: left"  class="text-h4 font-weight-bold white--text"> Selecciona el campo a predecir </div>
      <!-- Choosing field to predict -->
      <v-row v-if="!showFields" justify="center" align="center" style="height: 90%">
        <v-radio-group v-model="chosenFieldToPredict">
          <v-radio v-for="(item, index) in listOfFields" :key="index" :value="item">
            <template v-slot:label>
              <div class="white--text text-h5 font-weight-bold">{{item}}</div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-row>
      <!-- Fields to predict another one -->
      <div v-if="showFields">
        <div style="text-align: left"  class="text-h4 font-weight-bold white--text"> Predecir {{chosenFieldToPredict}}</div>
        <v-col style="margin-top: 10px">
          <Age v-if="chosenFieldToPredict !== 'Edad'" :only="true" @age="setAge"></Age>
          <Sex v-if="chosenFieldToPredict !== 'Sexo'" @chosen="setSex"></Sex>
          <CivilStatus v-if="chosenFieldToPredict !== 'Estado Civil'" @chosen="setCivilStatus"></CivilStatus>
          <EmployeeType v-if="chosenFieldToPredict !== 'Tipo Empleado'" @chosen="setEmployeeType"></EmployeeType>
          <Scholarity v-if="chosenFieldToPredict !== 'Escolaridad'" @chosen="setScholarity"></Scholarity>
        </v-col>
        <!-- Action buttons -->
        <v-row justify="center" class="mt-14">
          <v-btn
            :color="$vuetify.theme.themes['light'].background"
            class="text-lowercase white--text"
            @click="returnToChoseField"
            rounded>regresar</v-btn>
          <v-btn
            :color="$vuetify.theme.themes['light'].background"
            class="text-lowercase white--text ml-5"
            @click="predict"
            rounded>predecir</v-btn>
        </v-row>
      </div>
    </v-navigation-drawer>
    <PredictFieldInfoModal
      :open="openModal"
      :data="modalData"
    ></PredictFieldInfoModal>
  </div>
</template>

<script>
import Map from './Steps/Map'
import Sex from './Steps/Sex'
import Age from './Steps/Age'
import CivilStatus from './Steps/CivilStatus'
import Scholarity from './Steps/Scholarity'
import EmployeeType from './Steps/EmployeeType'
import { predictField } from '../plugins/doviAPI'
import PredictFieldInfoModal from './PredictFieldInfoModal'

export default {
  data: () => ({
    chosenFieldToPredict: '',
    showFields: false,
    listOfFields: [
      "Edad",
      "Sexo",
      "Estado Civil",
      "Tipo Empleado",
      "Escolaridad",
    ],
    openModal: false,
    modalData: '',
    openNavigation: false,
    age: -1,
    sex: '-',
    civilStatus: '-',
    scholarity: '-',
    employeeType: '-',
  }),
  props: {
    open: { type: Boolean },
  },
  methods: {
    setAge(val) {
      this.age = parseInt(val)
    },
    setCivilStatus(val) {
      this.civilStatus = val
    },
    setSex(val) {
      this.sex = val
    },
    setScholarity(val) {
      this.scholarity = val
    },
    setEmployeeType(val) {
      this.employeeType = val
    },
    async predict() {
      const data = {
        age: this.age,
        sex: this.sex,
        civilStatus: this.civilStatus,
        scholarship: this.scholarity,
        employeeType: this.employeeType,
      }

      const result = await predictField(data)
      this.modalData = result.data
      this.openModal = !this.openModal
    },
    returnToChoseField() {
      this.showFields = false
    }
  },
  watch: {
    open(val) {
      this.openNavigation = this.openNavigation ? this.openNavigation : true
    },
    chosenFieldToPredict(val) {
      if(!this.showFields)
        this.showFields = true
    }
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