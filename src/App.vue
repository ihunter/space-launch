<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        Space Launch Calendar
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>filter_list</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
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
