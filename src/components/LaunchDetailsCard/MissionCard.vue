<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-if="missions.length < 1">
        <v-card height="100%">
          <v-toolbar card>
            <v-toolbar-title>
              Misson 1 - Unknown Mission
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Unknown Mission Description
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="(mission, n) in missions" :key="mission.id">
        <v-card height="100%">
          <v-toolbar card>
            <v-toolbar-title>
              Misson {{ n + 1 }} - {{ mission.name }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            {{ mission.description }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    missions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
