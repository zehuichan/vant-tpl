import Vue from 'vue'
import Vuex from 'vuex'

// modules
import app from './modules/app'
import user from './modules/user'
import auth from './modules/auth'

// getters
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    auth
  },
  getters
})

export default store
