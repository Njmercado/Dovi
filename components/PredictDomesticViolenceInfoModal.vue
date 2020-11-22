<template>
  <v-dialog max-width='50em' v-model="realModalOpener">
    <v-card>
      <v-card-title>
        <v-row justify='center'>
          <div id='titulo' style="font-size: 1.2em">
            Resultado
          </div>
        </v-row>
      </v-card-title>
      <v-card-text>
        Usando los filtros dados, podemos establecer que con un porcentaje de <strong>{{data}}</strong>, 
        podrías ser victima de violencia intrafamiliar.
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
      console.log("open modal")
      this.realModalOpener = this.realModalOpener ? this.realModalOpener : true
    }
  }
}
</script>
