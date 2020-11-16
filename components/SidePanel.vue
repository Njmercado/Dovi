<template>
  <v-navigation-drawer id="drawer" absolute temporary v-model="openNavigation">
    <div style="text-align: left" class="text-h4 font-weight-bold">
      Información
    </div>
    <div id="information">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat
      augue id urna pellentesque, ac aliquam ipsum tempus. Donec posuere
      vulputate neque, vitae feugiat purus rutrum facilisis. Donec hendrerit
      luctus justo, egestas.
    </div>
    <v-row style="position: absolute; bottom: 20%; left: 15%">
      <div v-for="(item, index) in owners" :key="index">
        <v-avatar class="mt-4 ml-4 mr-4" color="blue" size="128">
          <v-img :src="item.image"></v-img>
        </v-avatar>
        <div class="font-weight-bold">{{ item.name }}</div>
        <v-icon id="icon" color="white">mdi-arrow-down-drop-circle-outline</v-icon>
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    openNavigation: false,
    owners: [
      {
        name: 'Nino Mercado',
        description:
          'lorem ipsum non asdfadf adsf asdf as fas fasd fasdfasf asdf asdf adf adfasfa',
        image:
          'https://avatars2.githubusercontent.com/u/26421737?s=460&u=0f285470742b3baa7cbc527d75342eec9681b3d0&v=4',
      },
      {
        name: 'Abraham Lugo',
        description:
          'lorem ipsum non asdfadf adsf asdf as fas fasd fasdfasf asdf asdf adf adfasfa',
        image:
          'https://avatars3.githubusercontent.com/u/48779532?s=460&u=5e5a418e601b7fa94a23d285b1b008b3731fbc04&v=4',
      },
      {
        name: 'Kebin Ramirez',
        description:
          'lorem ipsum non asdfadf adsf asdf as fas fasd fasdfasf asdf asdf adf adfasfa',
        image:
          'https://avatars0.githubusercontent.com/u/25647105?s=460&u=2258b47f548dbed25a0050663bcf612bce7dcfa3&v=4',
      },
    ],
  }),
  props: {
    open: { type: Boolean },
  },
  watch: {
    open(val) {
      this.openNavigation = this.openNavigation ? this.openNavigation : true
    },
  },
}
</script>

<style scoped>
#information {
  padding: 12px;
  text-align: left;
}

#drawer {
  padding: 32px 16px;
}
@media screen and (min-width: 650px) {
  #drawer {
    min-width: 50%;
  }
}
</style>