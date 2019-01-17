import router from './router'
import store from './store'
import {getWXToken} from '@/utils/auth'

const whiteList = ['/guide', '/fastLogin']// no redirect whitelist

router.beforeEach((to, from, next) => {
  // store.commit('SET_LOADING_STATE', true)

  if (getWXToken()) { // determine if there has token
    // has token
    console.log('has token')
    if (to.path === '/guide') {
      next({path: '/index'})
    } else {
      // 判断当前用户是否已拉取完user_info信息
      if (store.getters.wxNickName === '') {
        // 拉取user_info
        store.dispatch('GetUserInfo')
          .then((res) => {
            next({ ...to, replace: true })
          })
          .catch((e) => {
            next({path: '/guide'})
          })
      } else {
        next()
      }
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
