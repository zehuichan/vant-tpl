import router from './router'
import store from './store'
// progress bar
import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'
// NProgress Configuration
NProgress.configure({ showSpinner: false })
// utils
import getPageTitle from '@/utils/get-page-title'

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

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
  NProgress.done()
})
