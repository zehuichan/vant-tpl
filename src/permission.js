import router from './router'
import store from './store'
import { useTitle } from '@vueuse/core'

router.beforeEach(async (to, from, next) => {

  // set page title
  useTitle(to.meta.title)

  if (store.getters.userinfo) {
    next()
  } else {
    try {
      // 拉取基本信息
      await store.dispatch('user/getUserInfo')
      next()
    } catch (error) {
      console.log('error', error)
      await store.dispatch('user/resetUserInfo')
      next('/500')
    }
  }
})

router.afterEach(() => {

})
