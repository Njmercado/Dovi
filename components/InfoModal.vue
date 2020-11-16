<template>
  <v-dialog max-width='50em' v-model="realModalOpener">
    <v-card>
      <v-card-title>
        <v-row justify='center'>
          <div id='titulo' style="font-size: 1.2em">
            Información
          </div>
        </v-row>
      </v-card-title>
      <v-card-text>
        hola
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: [
    'open',
  ],
  data: () => ({
    realModalOpener: false
  }),
  watch: {
    open (val) {
      this.realModalOpener = this.realModalOpener ? this.realModalOpener : true
    }
  }
}
</script>
