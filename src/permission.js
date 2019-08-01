import router from './router'
import store from './store'

const whiteList = ['/guide', '/fastLogin']// no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // store.commit('SET_LOADING_STATE', true)
  if (store.getters.username) {
    next()
  } else {
    store.dispatch('GetUserInfo').then(()=>{
      store.dispatch('GetAddressList')
      next()
    }).catch(() => {
      next('/500')
    })
  }
})

router.afterEach(() => {
  // store.commit('SET_LOADING_STATE', false)
})
