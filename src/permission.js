import router from './router'
import store from './store'

// no redirect whitelist
const whiteList = ['/guide', '/fastLogin']

router.beforeEach(async (to, from, next) => {
  // store.commit('SET_LOADING_STATE', true)
  if (store.getters.username) {
    next()
  } else {
    try {
      await store.dispatch('GetUserInfo')
      await store.dispatch('GetAddressList')
      next({...to, replace: true})
    } catch (e) {
      next('/500')
    }
  }
})

router.afterEach(() => {
  // store.commit('SET_LOADING_STATE', false)
})
