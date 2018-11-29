import shop from '@/api/shop'

// shape: [{ id, quantity }]
const cart = {
  state: {
    items: [],
    checkoutStatus: null
  },
  mutations: {
    PUSH_PRODUCT_TO_CART: (state, id) => {
      state.items.push({
        id,
        quantity: 1
      })
    },
    INCREMENT_ITEM_QUANTITY: (state, id) => {
      const cartItem = state.items.find(item => item.id === id)
      cartItem.quantity++
    },
    SET_CART_ITEMS: (state, items) => {
      state.items = items
    },
    SET_CHECKOUT_STATUS: (state, status) => {
      state.checkoutStatus = status
    }
  },
  actions: {
    CheckOut({commit, state}, products) {
      const saveCartItems = [...state.items]
      commit('SET_CHECKOUT_STATUS', null)
      // empty cart
      commit('SET_CART_ITEMS', [])
      shop.buyProducts(
        products,
        () => commit('SET_CHECKOUT_STATUS', 'successful'),
        () => {
          commit('SET_CHECKOUT_STATUS', 'failed')
          // rollback to the cart saved before sending the request
          commit('SET_CART_ITEMS', saveCartItems)
        }
      )
    },
    AddProductToCart({commit, state}, product) {
      commit('SET_CHECKOUT_STATUS', null)
      if (product.inventory > 0) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
          commit('PUSH_PRODUCT_TO_CART', product.id)
        } else {
          commit('INCREMENT_ITEM_QUANTITY', cartItem)
        }
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', {id: product.id}, {root: true})
    }
  }
}

export default cart
