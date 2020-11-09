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
      if (this.dataIndex === 0)
        this.$store.commit('filter/filterState', item.name)
      if (this.dataIndex === 1) this.$store.commit('filter/town', item.name)
      if (this.dataIndex === 2)
        this.$store.commit('filter/neighbohood', item.name)
      this.chosenItem = item.childs
      this.chosenState = true
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
.fixed {
  position: fixed;
}

.z-index-1 {
  z-index: 1;
}
.z-index-2 {
  z-index: 2;
}
.z-index-3 {
  z-index: 3;
}
.z-index-4 {
  z-index: 4;
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