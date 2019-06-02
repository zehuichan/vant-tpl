const getters = {
  // index
  language: state => state.app.language,

  // loading
  loading: state => state.app.loading,

  // userInfo
  avatar: state => state.user.avatar,
  cellphone: state => state.user.cellphone,
  username: state => state.user.username,

  // auth
  token: state => state.auth.token,

  // shopCart
  cartProducts: (state, getters, rootState) => {
    return state.cart.items.map(({id, quantity}) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity * product.price
    }, 0)
  }
}

export default getters
