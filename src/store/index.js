import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import table from '@/store/modules/table'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    table
  }
})
