<template>
  <v-app>
    <v-main>

      <nuxt style="min-height: 75vh"/>

    </v-main>
  </v-app>
</template>

<script>
export default {
  // data: () => ({
  //   steps: ["mapa", "sexo", "edad", "estado civil", "escolaridad", "clase empleado"],
  //   currentStep: 0,
  //   disableNextButton: false
  // }),
  // watch: {
  //   currentStep(val) {
  //     this.disableNextButton = val >= this.steps.length
  //   }
  // },
  // methods: {
  //   nextStep() {
  //     const nextStep = this.steps[this.currentStep]
  //     this.$store.commit('step/next', nextStep)
  //     this.currentStep += 1
  //   }
  // },
}
</script>
