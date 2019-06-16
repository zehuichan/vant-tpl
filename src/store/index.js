import Vue from 'vue'
import Vuex from 'vuex'

// modules
import app from './modules/app'
import user from './modules/user'
import auth from './modules/auth'

import address from './modules/address'
import cart from './modules/cart'
import products from './modules/products'

// getters
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    auth,
    address,

    cart,
    products
  },
  getters
})

export default store
