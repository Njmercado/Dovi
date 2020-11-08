<template>
  <v-row justify="center" :align="step != 'mapa' ? 'start' : 'center'">
    <v-col
      xs="12"
      sm="12"
      md="6"
      lg="6"
      xl="6"
      :style="{
        background: $vuetify.theme.themes['light'].background,
        minHeight: '100vh',
      }"
    >
      <div
        v-if="step != 'mapa'"
        class="white--text text-h2 font-bold text-center text-capitalize"
        style="margin-top: 90px"
      >
        {{ step }}
      </div>
      <Map v-if="step === 'mapa'"></Map>
      <Sex v-if="step === 'sexo'"></Sex>
      <Age v-if="step === 'edad'"></Age>
      <CivilStatus v-if="step === 'estado civil'"></CivilStatus>
      <Scholarity v-if="step === 'escolaridad'"></Scholarity>
      <EmployeeType v-if="step === 'clase empleado'"></EmployeeType>
      <v-row justify="center" align="center">
        <v-btn color="secondary" class="ml-8 text-lowercase" rounded
          >terminar selección</v-btn
        >
        <v-btn
          color="secondary"
          class="ml-8 text-lowercase"
          @click="nextStep"
          rounded
          :disabled="disableNextButton"
          >siguiente</v-btn
        >
      </v-row>
    </v-col>
    <v-col
      justify="center"
      align="center"
      xs="12"
      sm="12"
      md="6"
      lg="6"
      xl="6"
      style="background-color: white; min-height: 100vh"
    >
      <v-row justify="space-between" align="center" class="px-8">
        <div class="white--text text-h3">dovi</div>
        <v-btn color="primary" class="text-lowercase" rounded
          >información</v-btn
        >
      </v-row>
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
  data: () => ({
    steps: [
      'mapa',
      'sexo',
      'edad',
      'estado civil',
      'escolaridad',
      'clase empleado',
    ],
    currentStep: 0,
    disableNextButton: false,
  }),
  computed: {
    step() {
      const step = this.$store.state.step.step
      return step
    },
  },
  watch: {
    currentStep(val) {
      this.disableNextButton = val >= this.steps.length
    },
  },
  methods: {
    nextStep() {
      const nextStep = this.steps[this.currentStep]
      this.$store.commit('step/next', nextStep)
      this.currentStep += 1
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
