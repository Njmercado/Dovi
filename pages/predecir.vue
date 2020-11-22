<template>
  <v-row>
    <v-col
      align="center"
      xs="12" sm="12" md="6" lg="6" xl="6"
      style="background-color: white; min-height: 100vh"
    >
      <v-row justify="end" align="center" class="px-8">
        <div>
          <v-btn color="secondary" @click="openHome" class="text-lowercase white--text" rounded>home</v-btn>
          <v-btn
            color="secondary"
            class="text-lowercase white--text"
            rounded @click="openInfoModal = !openInfoModal"
          >sobre nosotros</v-btn>
        </div>
      </v-row>
      <v-row justify="center" align="center" style="min-height: 90%">
        <v-img src="logo.png" max-width="50%" contain></v-img>
      </v-row>
    </v-col>
    <v-col
      xs="12" sm="12" md="6" lg="6" xl="6"
      justify="center" align="center"
      :style="{ background: $vuetify.theme.themes['light'].background, minHeight: '100vh' }"
    >
      <v-row justify="space-around" align="center" style="min-height: 100%">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
          <v-card width="100%" style="border-radius: 32px" color="secondary" class="text-lowercase white--text" @click="domesticViolence">
            <v-card-text class="white--text text-center text-h6">
              Predecir violencia intrafamiliar
            </v-card-text>
          </v-card>
          <v-card width="100%" style="border-radius: 32px" color="secondary" class="text-lowercase white--text mt-10" @click="predictField">
            <v-card-text class="white--text text-center text-h6">
              Predecir campo de acción
            </v-card-text>
          </v-card>
        </div>
      </v-row>
    </v-col>
    <SidePanel :open="openInfoModal"></SidePanel>
    <PredictActionFieldSidePanel :open="openPredictActionFieldSidePanel"></PredictActionFieldSidePanel>
    <PredictDomesticViolenceSidePanel :open="openPredictDomesticViolenceSidePanel"></PredictDomesticViolenceSidePanel>
  </v-row>
</template>

<script>
import PredictViewSide from '../components/PredictViewSide'
import SidePanel from '../components/SidePanel'
import PredictActionFieldSidePanel from '../components/PredictActionFieldSidePanel'
import PredictDomesticViolenceSidePanel from '../components/PredictDomesticViolenceSidePanel'

export default {
  data: () => ({
    openInfoModal: false,
    openPredictActionFieldSidePanel: false,
    openPredictDomesticViolenceSidePanel: false,
  }),
  methods: {
    domesticViolence() {
      this.openPredictDomesticViolenceSidePanel = !this.openPredictDomesticViolenceSidePanel
    },
    predictField() {
      this.openPredictActionFieldSidePanel = !this.openPredictActionFieldSidePanel
    },
    openHome() {
      this.$router.push('/')
    }
  },
  components: {
    PredictViewSide,
    SidePanel,
    PredictActionFieldSidePanel,
  },
}
</script>
