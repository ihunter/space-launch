<template>
  <v-container>
    <v-layout>
      <v-flex>
        <LaunchCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
    LaunchCard: () => import('@/components/LaunchCard')
  }
}
</script>
