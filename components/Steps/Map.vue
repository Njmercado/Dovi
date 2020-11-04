<template>
  <v-row justify="center" align="center">
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
      <div @click="setData(item)" :class="getClasses(item.size)">
        <MapItem
          :name="item.name"
          :cases="item.cases"
          :population="item.population"
          @click="setData(item)"
        ></MapItem>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import MapItem from '../MapItem'
import { states } from '../../plugins/lands.js'

export default {
  data: () => ({
    chosenItem: {},
    dataIndex: 0,
  }),
  mounted() {
    this.chosenItem = states
  },
  methods: {
    setData(item) {
      if(this.dataIndex === 0) this.$store.commit('filter/filterState', item.name)
      if(this.dataIndex === 1) this.$store.commit('filter/town', item.name)
      if(this.dataIndex === 2) this.$store.commit('filter/neighbohood', item.name)
      this.chosenItem = item.childs
    },
    getClasses(size) {
      return `circle ${size}-circle`
    },
  },
  components: {
    MapItem,
  },
}
</script>

<style>
.circle {
  border-radius: 100%;
  background-color: white;
  margin: 10px;
}
.small-circle {
  width: calc(50px + 4vw);
  height: calc(50px + 4vw);
}
.medium-circle {
  width: calc(75px + 6vw);
  height: calc(75px + 6vw);
}
.big-circle {
  width: calc(100px + 8vw);
  height: calc(100px + 8vw);
}
</style>