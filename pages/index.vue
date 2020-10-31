<template>
  <v-row justify="center">
    <v-col>
      <div style="margin-top: 90px" class="white--text text-h2 font-bold text-center text-capitalize">
        {{ step }}
      </div>
      <div class="mt-10">
        <Map v-if="step === 'mapa'"></Map>
        <Sex v-if="step === 'sexo'"></Sex>
        <Age v-if="step === 'edad'"></Age>
        <CivilStatus v-if="step === 'estado civil'"></CivilStatus>
        <Scholarity v-if="step === 'escolaridad'"></Scholarity>
        <EmployeeType v-if="step === 'clase empleado'"></EmployeeType>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Map from '../components/Steps/Map'
import Sex from '../components/Steps/Sex'
import Age from '../components/Steps/Age'
import CivilStatus from '../components/Steps/CivilStatus'
import Scholarity from '../components/Steps/Scholarity'
import EmployeeType from '../components/Steps/EmployeeType'

export default {
  computed: {
    step() {
      const step = this.$store.state.step.step
      return step
    },
  },
  components: {
    Map,
    Age,
    Sex,
    CivilStatus,
  },
}
</script>
