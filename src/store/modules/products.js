import shop from '@/api/shop'

// initial state
const products = {
  state: {
    all: []
  },
  mutations: {
    SET_PRODUCTS: (state, produces) => {
      state.all = produces
    },
    DECREMENT_PRODUCT_INVENTORY: (state, id) => {
      const product = state.all.find(product => product.id === id)
      product.inventory--
    }
  },
  actions: {
    GetAllProducts: ({commit}) => {
      shop.getProducts(product => {
        commit('SET_PRODUCTS', product)
      })
    }
  }
}

export default products
