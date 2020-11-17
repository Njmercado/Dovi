<template>
  <div class="px-8">
    <div v-if="!chosenState">
      <v-img src="map/colombia.png" contain :aspect-ratio="1">
        <v-tooltip
          v-for="(item, index) in chosenItem"
          :key="index"
          top
          style="padding: 0px; opacity: 1"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              :style="item.image.style"
              :class="item.image.class + ' position-point'"
              v-on="on"
              v-bind="attrs"
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
    <v-row v-else justify="center" align="center">
      <v-col
        xs="4"
        sm="3"
        md="2"
        lg="2"
        xl="2"
        justify="center"
        align="center"
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
  </div>
</template>

<script>
import MapItem from '../MapItem'
import { states } from '../../plugins/lands.js'
import { casesByState, towns, neighborhoods } from '../../plugins/doviAPI'

export default {
  data: () => ({
    chosenItem: {},
    dataIndex: 0,
    chosenState: false,
  }),
  mounted() {
    this.chosenItem = states
  },
  methods: {
    setData(item) {
      if (this.dataIndex === 0) this.handleStates(item.name)
      if (this.dataIndex === 1) this.handleTowns(item.name)
      if (this.dataIndex === 2) this.handleNeighborhoods(item.name)
      this.chosenState = true
      this.dataIndex = this.dataIndex < 2 ? this.dataIndex + 1 : this.dataIndex 
    },
    async handleStates(state) {
        this.$store.commit('filter/state', state)
        this.chosenItem = await towns(state)
        // const results = await casesByState(state)
        // this.$store.commit('filter/filterResults', results)
    },
    async handleTowns(town) {
        this.$store.commit('filter/town', town)
        const state = this.$store.state.filter.filter.place.state
        this.chosenItem = await neighborhoods(state, town)
    },
    async handleNeighborhoods(neighbohood) {
        this.$store.commit('filter/neighborhood', neighbohood)
    },
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