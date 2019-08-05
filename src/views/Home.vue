<template>
  <v-container>
    <v-layout column align-center>
      <LaunchCard
        v-for="launch in launches" :key="launch.id"
        :name="launch.name"
        :rocketImageURL="launch.rocket.imageURL"
        :lspName="launch.lsp.name"
        :locationName="launch.location.name"
        :netstamp="launch.netstamp"
        :status="launch.status"
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
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['launches'])
  },
  async mounted () {
    try {
      this.loading = true
      await this.getMissionTypes()
      await this.getLaunchesStatuses()
      await this.getLaunches()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launches', ['getLaunches']),
    ...mapActions('launchStatuses', ['getLaunchesStatuses']),
    ...mapActions('missionTypes', ['getMissionTypes'])
  }
}
</script>
