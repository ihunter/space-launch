<template>
  <v-card>
    <v-container>
      <v-layout row justify-space-between>
        <v-switch
          v-for="agency in agencies" :key="agency.id"
          v-model="agenciesSelected"
          :label="agency.name"
          :value="agency.id"
          class="mx-2"
        />
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LaunchFilters',
  computed: {
    ...mapGetters('agencies', ['agencies'])
  },
  data () {
    return {
      flat: false,
      agenciesSelected: []
    }
  }
}
</script>

<style scoped>

</style>
