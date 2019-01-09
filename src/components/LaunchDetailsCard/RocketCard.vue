<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>
              {{ rocket.name }}
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <p>Family: {{ rocket.familyname }}</p>
            <p>Configuration: {{ rocket.configuration }}</p>
            <p>Wiki: <a :href="rocket.wikiURL" target="_blank">{{ rocket.wikiURL }}</a></p>
            <p>Info: <a :href="rocket.infoURL" target="_blank">{{ rocket.infoURL }}</a></p>
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    rocket: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
