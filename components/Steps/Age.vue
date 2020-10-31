<template>
  <div class="pt-10">
    <v-row align="start" justify="center">
      <div class="white--text font-bold text-h5 mt-2">Desde</div>
      <v-col xs="10" sm="7" md="6" lg="6" xl="6">
        <v-slider
          v-model="beginAge"
          thumb-label="always"
          color="#C4C4C4"
          thumb-size="40"
        ></v-slider>
      </v-col>
    </v-row>
    <v-row align="start" justify="center" class="mt-10">
      <div class="white--text font-bold text-h5 mt-2">Hasta</div>
      <v-col xs="10" sm="7" md="6" lg="6" xl="6">
        <v-slider
          v-model="endAge"
          thumb-label="always"
          color="#C4C4C4"
          thumb-size="40"
        ></v-slider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    beginAge: 5,
    endAge: 6,
  }),
  watch: {
    beginAge(val) {
      if (val >= this.endAge) {
        this.endAge = val + 1
      }
    },
  },
}
</script>