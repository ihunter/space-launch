import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import { Resize } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  iconfont: 'md',
  directives: {
    Resize
  }
})
