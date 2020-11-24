<template>
  <div class="px-8">
    <!-- boton para regresar en el mapa -->
    <!-- Si el usuario ha seleccionado un departamento -->
    <v-btn v-if="dataIndex > 0" @click="backToItem()" rounded small class="text-lowercase" color="secondary">
      <v-icon left dark>mdi-arrow-left</v-icon>
      <div v-if="dataIndex === 1">departamentos</div>
      <div v-if="dataIndex === 2">municipios</div>
    </v-btn>
    <div v-if="dataIndex === 0">
      <v-img src="map/colombia.png" contain :aspect-ratio="1">
        <v-tooltip style="padding: 0px; opacity: 1" v-for="(item, index) in chosenItem"
          :key="index" top
        >
          <template v-slot:activator="{ on, attrs }">
            <div :style="item.image.style" :class="item.image.class + ' position-point'"
              v-on="on" v-bind="attrs"
              @click="setData(item)"
            ></div>
          </template>
          <div
            id="template-tooltip"
            class="black--text py-4 px-4 rounded"
            style="background-color: white; margin: -10px -20px"
          >
            <div>{{ item.name }}</div>
            <div>Numero de casos:</div>
            <div>{{ item.cases }}</div>
          </div>
        </v-tooltip>
      </v-img>
    </div>
    <v-col v-if="dataIndex > 0 && dataIndex < 3" align="center">
      <div style="max-width: 70%; margin-top: 10px">
        <Searcher
          @result="handleSearchResult"
          :clearCache="clearSearcherCache"
          :items="chosenItem"></Searcher>
      </div>
      <v-row justify="center" align="center">
        <v-col xs="4" sm="3" md="3" lg="3" xl="2" justify="center" align="center"
          v-for="(item, index) in chosenItem"
          :key="index"
        >
          <div @click="setData(item)">
            <MapItem
              :name="item.name"
              :cases="item.cases"
              :population="item.population"
            ></MapItem>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import MapItem from '../MapItem'
import Searcher from '../Searcher'
import { states } from '../../plugins/lands.js'
import { casesByState, towns, neighborhoods } from '../../plugins/doviAPI'

export default {
  data: () => ({
    chosenItem: {},
    dataIndex: 0,
    map: {
      towns: [],
      neighbohoods: []
    },
    clearSearcherCache: false
  }),
  mounted() {
    this.handleCountry()
  },
  watch: {
    async dataIndex(val) {
      if (val === 0) await this.handleCountry()
      if (val === 1) await this.handleStates(this.chosenItem.name)
      if (val === 2) await this.handleTowns(this.chosenItem.name)
      if (val === 3) await this.handleNeighborhoods(this.chosenItem.name)
      this.clearSearcherCache = !this.clearSearcherCache
    },
  },
  methods: {
    setData(item) {
      this.dataIndex = this.dataIndex < 3 ? this.dataIndex + 1 : this.dataIndex 
      // No asignar información cuando este seleccione un barrio,
      // ya que es información que se sale de nuestras mano.
      this.chosenItem = item
    },
    async handleStates(state) {
      if(this.map.towns.length === 0){
        this.$store.commit('filter/state', state)
        this.chosenItem = await towns(state)
        this.map.towns = this.chosenItem
      } else {
        this.chosenItem = this.map.towns
        // Reset neighborhoods
        this.map.neighbohoods = []
      }
    },
    async handleTowns(town) {
      if(this.map.neighbohoods.length === 0){
        this.$store.commit('filter/town', town)
        const state = this.$store.state.filter.filter.place.state
        this.chosenItem = await neighborhoods(state, town)
        this.map.neighbohoods = this.chosenItem
      } else {
        this.chosenItem = this.map.neighbohoods
      }
    },
    async handleNeighborhoods(neighbohood) {
      this.$store.commit('filter/neighborhood', neighbohood)
    },
    async handleCountry() {
      this.chosenItem = states
      this.map.towns = []
    },
    backToItem() {
      this.dataIndex -= 1
    },
    handleSearchResult(val){ 
      this.chosenItem = val
    }
  },
  components: {
    MapItem,
  },
}
</script>

<style>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}

.state-image {
  position: absolute;
}

.position-point {
  width: 10px;
  height: 10px;
  background-color: white;
  z-index: 10;
  border-radius: 50%;
  transition-property: width height;
  transition-duration: 0.5s;
}
.position-point:hover {
  width: 16px;
  height: 16px;
}
</style>