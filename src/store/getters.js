const getters = {
  // index
  language: state => state.app.language,

  // loading
  loading: state => state.app.loading,

  // tabbar
  tabbar: state => state.app.tabbar,

  // userInfo
  avatar: state => state.user.avatar,
  cellphone: state => state.user.cellphone,
  username: state => state.user.username,

  // address
  address_list: state => state.address.address_list,
  chosen_address: state => state.address.chosen_address,
  default_address: state => state.address.address_list.find((item) => item.default === 1),

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
