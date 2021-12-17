import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * name:'router-name'            the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    navbar: object               detail see: https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar#api
    tabbar: boolean              if set true, will always show the tabbar
  }
 */

// basic components
import Layout from '@/layout'

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
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home'),
        name: 'home',
        meta: {
          title: '组件',
          navbar: {
            showTitle: false,
            leftArrow: false,
          },
          tabbar: true,
        },
      },
      {
        path: '/api',
        component: () => import('@/views/api'),
        name: 'api',
        meta: {
          title: 'api',
          navbar: {
            showTitle: false,
            leftArrow: false,
          },
          tabbar: true
        },
      },
      {
        path: '/my',
        component: () => import('@/views/my'),
        name: 'my',
        meta: { title: '关于我', tabbar: true },
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  version: '1',
  // mode: 'history', // require service support
  scrollBehavior(to, from, savedPosition) {
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

console.info('[INFO] ' + 'VueRouter', VueRouter.version)
export default router