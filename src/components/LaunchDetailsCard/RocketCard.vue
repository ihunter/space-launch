<template>
  <v-container>
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
            <p><a :href="rocket.wikiURL" target="_blank">Wiki</a></p>
            <p><a :href="rocket.infoURL" target="_blank">Info</a></p>
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
