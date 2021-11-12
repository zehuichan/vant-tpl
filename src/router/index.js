import Vue from 'vue'
import Router from 'vue-router'

// basic components
import BasicLayout from '@/layout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const routes = [
  { path: '/403', component: () => import('@/views/error-page/403') },
  { path: '/404', component: () => import('@/views/error-page/404') },
  { path: '/500', component: () => import('@/views/error-page/500') },
  {
    path: '/',
    redirect: '/tabs/home',
    component: BasicLayout,
    children: [
      {
        path: '/tabs/home',
        component: () => import('@/views/home'),
        name: 'home',
        meta: { title: '组件', tabbar: true },
      },
      {
        path: '/tabs/api',
        component: () => import('@/views/api'),
        name: 'api',
        meta: { title: 'api', tabbar: true },
      },
      {
        path: '/tabs/my',
        component: () => import('@/views/my'),
        name: 'my',
        meta: { title: '关于我', tabbar: true },
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

Vue.use(Router)

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (savedPosition) {
      return Promise.resolve(savedPosition)
    }
    return { y: 0 }
  },
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router