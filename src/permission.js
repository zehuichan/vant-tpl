import router from './router'
import store from './store'
import {loadFromLocal, saveToLocal} from '@/utils' // getToken from cookie

const whiteList = ['/guide', '/fastLogin']// no redirect whitelist

router.beforeEach((to, from, next) => {
  // store.commit('SET_LOADING_STATE', true)

  if (loadFromLocal('token') !== null) { // determine if there has token
    // has token
    console.log('has token')
    if (to.path === '/guide') {
      /*store.dispatch('GetUserInfo').then((res) => {
        next({path: '/index'})
      })*/
      next({path: '/index'})
    } else {
      next()
    }
  } else {
    // has no token
    console.log('has no token')
    store.dispatch('GetToken').then((res) => {
      if (whiteList.indexOf(to.path) !== -1) {
        // 在免登录白名单，直接进入
        next()
      } else {
        // 否则全部重定向到欢迎页
        next({path: '/guide'})
      }
    })
  }
})

router.afterEach(() => {
  // setTimeout(() => {
  //   store.commit('SET_LOADING_STATE', false)
  // }, 1000)
})
