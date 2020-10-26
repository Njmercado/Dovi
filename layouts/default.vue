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
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      color: true //dark
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },
  methods: {
    changeColor() {
      console.log(this.color)
      if (this.color) {
        this.$vuetify.theme.dark = true
        this.$vuetify.theme.light = false
      } else {
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.light = true
      }
      this.color = !this.color
    }
  }
}
</script>
