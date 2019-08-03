<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app clipped>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
