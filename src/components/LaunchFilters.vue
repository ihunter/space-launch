<template>
  <v-card max-width="825" flat>
    <v-container>
      <v-layout row>
        <v-flex v-for="agency in curatedAgencies" :key="agency.id">
          <v-switch
            v-model="selectedAgencies"
            :label="agency.name"
            :value="agency.id"
            class="mx-2"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LaunchFilters',
  computed: {
    ...mapGetters('agencies', ['curatedAgencies'])
  },
  data () {
    return {
      flat: false,
      selectedAgencies: []
    }
  },
  watch: {
    selectedAgencies () {
      this.$store.commit('agencies/setSelectedAgencies', this.selectedAgencies)
    }
  }
}
</script>

<style scoped>

</style>
