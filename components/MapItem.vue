<template>
  <v-tooltip top style="padding: 0px; opacity: 1">
    <template v-slot:activator="{ on, attrs }">
      <v-row
        align="center"
        justify="center"
        v-on="on"
        v-bind="attrs"
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <v-img src="map/ubicaciones/ubicacion.png" style="max-width: 50px"></v-img>
          <div class="white--text">{{name}}</div>
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
  props: {
    name: { type: String },
    population: { type: String },
    cases: { type: String },
    casesPer1000Inhabitants: { type: String },
  }
}
</script>