<template>
  <v-card>
    <v-toolbar card extended>
      <h3>{{ name }}</h3>
      <div slot="extension" class="toolbar-extension">
        <p>{{ location }}</p>
        <p>{{ net }}</p>
      </div>
    </v-toolbar>

    <v-img v-if="intersected" :src="imageUrl" :lazy-src="lazyUrl"></v-img>

    <v-card-text>
      <v-divider />
      <div class="test-flex">
        <span class="text-xs-center" :class="[tbddate ? 'launch-unconfirmed' : 'launch-confirmed']">
          {{ tbddate ? 'Launch Date Unconfirmed' : 'Go for Launch'}}
        </span>
      </div>
      <div v-for="mission in missions" :key="mission.id">
        <div>
          {{ mission.name }}
        </div>
        <div>
          {{ mission.description }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'NAME'
    },
    location: {
      type: String,
      required: true,
      default: 'LOCATION'
    },
    net: {
      type: String,
      required: true,
      default: '0'
    },
    netstamp: {
      type: Number,
      required: true,
      default: 0
    },
    missions: {
      type: Array,
      required: true,
      default: () => []
    },
    imageUrl: {
      type: String,
      required: true,
      default: 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_320.png'
    },
    tbddate: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data () {
    return {
      intersected: false,
      lazyUrl: 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_320.png'
    }
  },
  mounted () {
    const observer = new IntersectionObserver(entries => {
      const launchCard = entries[0]
      if (launchCard.isIntersecting) {
        this.intersected = true
        observer.disconnect()
      }
    })

    observer.observe(this.$el)
  }
}
</script>

<style scoped>
.toolbar-extension p {
  padding: 0;
  margin: 0;
}

.launch-confirmed {
  padding: 5px 10px;
  color: white;
  border-radius: 15px;
  box-shadow: 0 3px 5px #aaaaaa;
  background-color: green;
  position: relative;
  top: -15px;

}
.launch-unconfirmed {
  padding: 5px 10px;
  color: white;
  border-radius: 15px;
  box-shadow: 0 3px 5px #aaaaaa;
  background-color: red;
  position: relative;
  top: -15px;
}

.test-flex {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
</style>
