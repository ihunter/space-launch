<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex v-for="pad in location.pads" :key="pad.id">
        <v-card height="100%">
          <v-toolbar card>
            <v-toolbar-title>
              {{ pad.name }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <GmapMap
              :center="{ lat: pad.latitude, lng: pad.longitude }"
              :zoom="5"
              map-type-id="terrain"
              style="width: 100%; height: 300px"
            >
            </GmapMap>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
