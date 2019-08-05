<template>
  <v-container>
    <v-layout column align-center>
      <LaunchCard
        v-for="launch in launches" :key="launch.id"
        :name="launch.name"
        :lspName="launch.lsp.name"
        :locationName="launch.location.name"
        :netstamp="launch.netstamp"
        :status="launch.status"
        :missionTypeName="launch.missions[0].typeName"
        :missions="launch.missions"
      />
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    LaunchCard: () => import('@/components/LaunchCard')
  },
  computed: {
    ...mapGetters('launches', ['launches'])
  },
  mounted () {
    this.getLaunches()
  },
  methods: {
    ...mapActions('launches', ['getLaunches'])
  }
}
</script>
