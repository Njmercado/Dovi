<template>
  <v-text-field label="buscar" rounded solo v-model="searchItem"></v-text-field>
</template>

<script>
export default {
  name: 'Searcher',
  data: () => ({
    localItems: [],
    localItemsBackup: [],
    searchItem: '',
    dataWasGiven: false,
  }),
  props: ['items', 'clearCache'],
  mounted() {
    this.localItems = this.items
    this.localItemsBackup = this.items
  },
  watch: {
    clearCache(val) {
      this.localItemsBackup = this.localItems
    },
    items(val) {
      this.localItems = val
      if(!this.dataWasGiven){
        this.localItemsBackup = val
        this.dataWasGiven = true
      }
    },
    async searchItem(val) {
      if (val.length <= 1) {
        this.$emit('result', this.localItemsBackup)
      } else {
        const result = await this.localItems.filter((item) => {
          if (item.name.toLowerCase().search(val.toLowerCase()) != -1) {
            return item
          }
        })
        this.$emit('result', result)
      }
    },
  },
}
</script>

<style scoped>
</style>