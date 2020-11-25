<template>
  <v-dialog max-width='50em' v-model="realModalOpener">
    <v-card>
      <v-card-title>
        <v-row justify='center'>
          <div id='titulo' style="font-size: 1.2em">
            Campo predecido
          </div>
        </v-row>
      </v-card-title>
      <v-card-text>
        Con un accuracy del <strong>{{data.accuracy}}%</strong> usando el método de Naives, para predecir un campo en especifico, podemos 
        decir que el campo obtenido es <strong>{{data.field}}</strong>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    'open',
    'data'
  ],
  data: () => ({
    realModalOpener: false
  }),
  watch: {
    open (val) {
      console.log(this.data)
      this.realModalOpener = this.realModalOpener ? this.realModalOpener : true
    }
  }
}
</script>
