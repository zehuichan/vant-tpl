import shop from '@/api/shop'

const state = {
  all: []
}

const mutations = {
  SET_PRODUCTS: (state, produces) => {
    state.all = produces
  },
  DECREMENT_PRODUCT_INVENTORY: (state, id) => {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

const actions = {
  GetAllProducts: ({commit}) => {
    shop.getProducts(product => {
      commit('SET_PRODUCTS', product)
    })
  }
}

export default {
  namespaced: 'products',
  state,
  mutations,
  actions
}
