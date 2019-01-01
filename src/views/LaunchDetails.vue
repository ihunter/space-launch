<template>
  <v-container>
    <v-layout>
      <v-flex>
        <launch-details-card
          :id="launchDetails.id"
          :name="launchDetails.name"
          :location="launchDetails.location.name"
          :net="launchDetails.net"
          :netstamp="launchDetails.netstamp"
          :missions="launchDetails.missions"
          :imageUrl="launchDetails.rocket.imageURL"
          :imageSizes="launchDetails.rocket.imageSizes"
          :tbddate="launchDetails.tbddate"
          :lsp="launchDetails.lsp.name"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    LaunchDetailsCard: () => import('@/components/LaunchDetailsCard')
  },
  props: {
    id: {
      type: String,
      required: true,
      default: '0'
    }
  },
  data () {
    return {
      launchDetails: {}
    }
  },
  async mounted () {
    this.launchDetails = (await axios.get(`https://launchlibrary.net/1.4/launch/${this.id}`)).data.launches[0]
  }
}
</script>

<style>

</style>
