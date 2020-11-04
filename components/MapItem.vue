<template>
  <v-tooltip top style="padding: 0px; opacity: 1">
    <template v-slot:activator="{ on, attrs }">
      <v-row
        align="center"
        justify="center"
        style="height: 100%"
        v-on="on"
        v-bind="attrs"
      >
        <div class="font-bold text-h6">
          {{ name }}
        </div>
      </v-row>
    </template>
    <div
      id="template-tooltip"
      class="black--text py-4 px-4 rounded"
      style="background-color: white; margin: -10px -20px"
    >
      <div>Numero de casos:</div>
      <div>{{ cases }}</div>
    </div>
  </v-tooltip>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    name: { type: String },
    population: { type: String },
    cases: { type: String },
    casesPer1000Inhabitants: { type: String },
  }
}
</script>