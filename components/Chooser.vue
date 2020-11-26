<template>
  <v-col id="chooser">
    <v-row id="chooser-input">
      <input v-model="chosenItem" type="text" :placeholder="chosenItem || label" readonly />
      <v-btn id="chooser-icon" @click="showOptions = !showOptions">
        <v-icon id="icon" color="white">mdi-arrow-down-drop-circle-outline</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-col v-if="showOptions" id="items">
        <div id="items-container">
          <v-row id="item" @click="setChosenItem(item)" v-for="(item, index) in items" :key="index">{{item}}</v-row>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    showOptions: false,
    chosenItem: '',
  }),
  props: ['label'],
  methods: {
    setChosenItem (val) {
      this.chosenItem = val
      this.showOptions = !this.showOptions
      this.$emit('chosen', val)
    }
  },
  props: { items: { type: Array }, label: {type: String} },
}
</script>

<style>
#chooser {
  position: relative;
}

#chooser-input {
  background-color: white;
  border-radius: 16px;
  position: relative;
}
#chooser-input input {
  padding: 8px 10px;
  width: 90%;
}

#chooser-icon {
  background-color: #e07777;
  width: 10%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 0;
}

#items {
  position: absolute;
  z-index: 2;
}
#items {
  background-color: white;
  margin-top: 16px;
  left: 0;
  border-radius: 16px;
}
#items-container {
  border-radius: 16px;
  padding: 16px 24px;
  max-height: 200px;
  overflow-y: scroll;
}
#item {
  background-color: #dddee9;
  border-radius: 8px;
  padding: 12px;
  margin-top: 4px;
  cursor: pointer;
}
#item:hover {
  background-color: lightpink;
  color: white;
}
</style>