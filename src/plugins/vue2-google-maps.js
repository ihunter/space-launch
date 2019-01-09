import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzHKYak_rWpRJPAtiFRnBMlS1yFV_pVNs',
    libraries: 'places'
  }
})
