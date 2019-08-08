<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

        <!-- If using vue-router -->
        <router-view></router-view>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      loading: true
    }
  },
  async created () {
    try {
      this.loading = true
      await this.getAgencies()
      await this.getMissionTypes()
      await this.getLaunchesStatuses()
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions('launchStatuses', ['getLaunchesStatuses']),
    ...mapActions('missionTypes', ['getMissionTypes']),
    ...mapActions('agencies', ['getAgencies'])
  }
}
</script>
