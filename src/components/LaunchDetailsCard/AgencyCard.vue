<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>
              {{ lsp.name }}
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sit, deserunt amet dolores ipsam est ipsum sapiente iste at tempore. Voluptate eaque inventore officiis eius, aliquid eos soluta dicta nesciunt.
          </v-card-text>

          <v-card-actions>
            <v-btn
              block
              :color="buttonColor(url)"
              :href="url"
              target="_blank"
              v-for="url in lsp.infoURLs"
              :key="url"
            >
              {{ url | infoUrlName }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
  }
}
</script>

<style>

</style>
