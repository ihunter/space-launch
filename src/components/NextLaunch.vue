<template>
  <v-img
    v-if="!loading"
    :src="nextLaunch.rocket.imageURL"
    lazy-src="https://picsum.photos/id/11/10/6"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    class="grey lighten-2 white--text"
    max-width="825"
  >
    <v-container fill-height>
      <v-layout column align-center justify-center class="text-center">
        <v-flex shrink>
          <p class="display-1">
            {{ nextLaunch.name }}
          </p>
          <p class="display-2">
            <CountDown :endDate="nextLaunch.isostart" />
          </p>
          <p class="headline">
            {{ nextLaunch.isostart | date }}
          </p>
          <p class="body-1">
            {{ nextLaunch.missions[0].description }}
          </p>

          <v-btn :to="{ name: 'launch', params: { launchID: nextLaunch.id } }">
            more
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
import moment from 'moment'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NextLaunch',
  components: {
    CountDown: () => import('@/components/CountDown')
  },
  filters: {
    date (date) {
      return moment(date).format('MMMM Do, YYYY - h:mm A')
    }
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('launches', ['nextLaunch'])
  },
  async created () {
    try {
      this.loading = true
      await this.getNextLaunch()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launches', ['getNextLaunch'])
  }
}
</script>

<style scoped>

</style>
