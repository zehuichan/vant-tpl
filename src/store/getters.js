const getters = {

  // loading
  loading: state => state.app.loading,

  // userInfo
  avatar: state => state.user.avatar,
  identityFlag: state => state.user.identityFlag,
  nickName: state => state.user.nickName,

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
