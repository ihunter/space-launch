<template>
  <v-container grid-list-sm>
    <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>
              {{ lsp.name }}
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            {{ getAgencyById(lsp.id).description }}
          </v-card-text>

          <v-card-actions>
            <v-layout row wrap>
              <v-flex v-for="url in lsp.infoURLs" :key="url">
                <v-btn
                  block
                  :color="buttonColor(url)"
                  :href="url"
                  target="_blank"
                >
                  {{ url | infoUrlName }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import parse from 'url-parse'

export default {
  props: {
    lsp: {
      type: Object,
      required: true
    }
  },
  filters: {
    infoUrlName (url) {
      return parse(url).host.split('.').reverse()[1]
    }
  },
  methods: {
    buttonColor (url) {
      const host = parse(url).host.split('.').reverse()[1]
      if (host === 'youtube') return '#FF0000'
      if (host === 'facebook') return '#3B5998'
      if (host === 'twitter') return '#00ACEE'
      if (host === 'instagram') return '#FBAD50'
    }
  },
  computed: {
    ...mapGetters(['getAgencyById'])
  }
}
</script>

<style>

</style>
