import Vue from 'vue'
import Router from 'vue-router'

// basic components
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const routes = [
  { path: '/', redirect: '/tabs/home' },
  { path: '/403', component: () => import('@/views/error-page/403') },
  { path: '/404', component: () => import('@/views/error-page/404') },
  { path: '/500', component: () => import('@/views/error-page/500') },
  {
    path: '/tabs',
    component: BasicLayout,
    children: [
      {
        path: '/tabs/home',
        component: () => import('@/views/home'),
        name: 'home',
        meta: { title: '组件' },
      },
      {
        path: '/tabs/api',
        component: () => import('@/views/api'),
        name: 'api',
        meta: { title: 'api' },
      },
      {
        path: '/tabs/my',
        component: () => import('@/views/my'),
        name: 'my',
        meta: { title: '关于我' },
      }
    ]
  },

  { path: '*', redirect: '/404' }
]

Vue.use(Router)

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router