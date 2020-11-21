<template>
  <div>
    <v-navigation-drawer
      id="drawer"
      right
      absolute
      temporary
      v-model="openNavigation"
      :color="$vuetify.theme.themes['light'].secondary"
    >
      <div
        style="text-align: left"
        class="text-h4 font-weight-bold white--text"
      >
        Predecir Campo de acción
      </div>
      <div style="margin-top: 10px">
        <Age :only="true" @begin="setAge"></Age>
        <Sex @chosen="setSex"></Sex>
        <CivilStatus @chosen="setCivilStatus"></CivilStatus>
        <EmployeeType @chosen="setEmployeeType"></EmployeeType>
        <Scholarity @chosen="setScholarity"></Scholarity>
      </div>
      <v-row justify="center" class="mt-14">
        <v-btn
          :color="$vuetify.theme.themes['light'].background"
          class="text-lowercase white--text"
          @click="predict"
          rounded
          >predecir</v-btn
        >
      </v-row>
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
    openModal: false,
    modalData: '',
    openNavigation: false,
    age: 18,
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