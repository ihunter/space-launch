<template>
  <v-container>
    <v-layout>
      <v-flex v-for="pad in location.pads" :key="pad.id">
        <v-card height="100%">
          <v-toolbar card>
            <v-toolbar-title>
              {{ pad.name }}
            </v-toolbar-title>
          </v-toolbar>

          <GmapMap
            class="gmap"
            :center="{ lat: pad.latitude, lng: pad.longitude }"
            :zoom="7"
          >
            <GmapMarker
              :position="{ lat: pad.latitude, lng: pad.longitude }"
            >
            </GmapMarker>
          </GmapMap>
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

<style scoped>
.gmap {
  width: 100%;
  height: 300px
}
</style>
