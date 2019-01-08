<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 md10 lg8>
        <LaunchDetailsCard
          v-if="!loading"
          :id="launchDetails.id"
          :name="launchDetails.name"
          :location="launchDetails.location.name"
          :net="launchDetails.net"
          :netstamp="launchDetails.netstamp"
          :missions="launchDetails.missions"
          :imageUrl="launchDetails.rocket.imageURL"
          :imageSizes="launchDetails.rocket.imageSizes"
          :tbddate="launchDetails.tbddate"
          :lsp="launchDetails.lsp"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    LaunchDetailsCard: () => import('@/components/LaunchDetailsCard/Index')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created () {
    this.fetchLaunchDetails(this.id)
  },
  computed: {
    ...mapGetters(['loading', 'launchDetails'])
  },
  methods: {
    ...mapActions(['fetchLaunchDetails'])
  }
}
</script>

<style>

</style>
