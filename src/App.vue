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
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  }
}
</script>
