<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="right = !right">
        <v-icon>filter_list</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      v-model="right"
      right
      temporary
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile v-for="agency in agencies" :key="agency.id">
          <v-switch
            :label="agency.name"
            v-model="lsp"
            :value="agency.abbrev"
          ></v-switch>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-layout v-if="loading" justify-center align-center fill-height>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
        >
        </v-progress-circular>
      </v-layout>

      <router-view v-else/>
    </v-content>
    
    <v-footer>
      <v-spacer></v-spacer>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      title: 'Space Launch Calendar',
      drawer: false,
      right: false,
      items: [{
        icon: 'home',
        title: 'Home',
        link: '/'
      }],
      lsp: []
    }
  },
  computed: {
    ...mapGetters(['loading', 'agencies'])
  },
  watch: {
    lsp () {
      this.$store.dispatch('setFilters', {
        lsp: this.lsp
      })
    }
  },
  name: 'App'
}
</script>
