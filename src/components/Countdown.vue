<template>
  <span>
    {{ countdown }}
  </span>
</template>

<script>
import moment from 'moment'
require('moment-duration-format')

export default {
  props: ['netstamp'],
  data () {
    return {
      now: 0
    }
  },
  computed: {
    diff () {
      return (this.netstamp) - this.now
    },
    countdown () {
      if (this.netstamp) {
        return moment.duration(this.diff, 's').format('D:hh:mm:ss', {trim: false})
      } else {
        return 'TBA'
      }
    }
  },
  created () {
    setInterval(() => {
      this.now = (new Date()).getTime() / 1000
    }, 1000)
  }
}
</script>

<style>

</style>
