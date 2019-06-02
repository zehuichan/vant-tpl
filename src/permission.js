import router from './router'
import store from './store'

const whiteList = ['/guide', '/fastLogin']// no redirect whitelist

router.beforeEach((to, from, next) => {
  // store.commit('SET_LOADING_STATE', true)
  next()
})

router.afterEach(() => {
    // store.commit('SET_LOADING_STATE', false)
})
