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
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    LaunchDetailsCard: () => import('@/components/LaunchDetailsCard')
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.fetchLaunchDetails(this.id)
  },
  computed: {
    ...mapGetters(['launchDetails'])
  },
  methods: {
    ...mapActions(['fetchLaunchDetails'])
  }
}
</script>

<style>

</style>
