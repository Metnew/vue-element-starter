import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ui
  }
})

export default store
