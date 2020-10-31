<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-main>
      <v-row justify="space-between" align="center" class="px-8 py-4">
        <div class="white--text text-h3">dovi</div>
        <div>
          <v-icon
            v-if="theme === 'dark'"
            @click="changeColor()"
            color="white">mdi-weather-sunny</v-icon>
          <v-icon
            v-if="theme === 'light'"
            @click="changeColor()"
            color="white">mdi-weather-sunny-off</v-icon>
          <v-btn color="primary" class="ml-8 text-lowercase" rounded>información</v-btn>
        </div>
      </v-row>
      <nuxt style="min-height: 75vh"/>
      <v-row justify="center" align="center" class="px-8 py-4">
        <v-btn color="secondary" class="ml-8 text-lowercase" rounded>terminar selección</v-btn>
        <v-btn color="secondary" class="ml-8 text-lowercase" @click="nextStep" rounded :disabled="disableNextButton">siguiente</v-btn>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    color: true, //dark
    steps: ["mapa", "sexo", "edad", "estado civil", "escolaridad", "clase empleado"],
    currentStep: 0,
    disableNextButton: false
  }),
  watch: {
    currentStep(val) {
      this.disableNextButton = val >= this.steps.length
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  methods: {
    changeColor() {
      if (this.color) {
        this.$vuetify.theme.dark = true
        this.$vuetify.theme.light = false
      } else {
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.light = true
      }
      this.color = !this.color
    },
    nextStep() {
      const nextStep = this.steps[this.currentStep]
      this.$store.commit('step/next', nextStep)
      this.currentStep += 1
    }
  },
}
</script>
