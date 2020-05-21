import Vue from 'vue'
import Router from 'vue-router'

// basic components
const BasicLayout = () => import('@/layouts/BasicLayout')
const BlankLayout = () => import('@/layouts/BlankLayout')

// view components
const Home = () => import('@/views/home')
const Message = () => import('@/views/message')
const Me = () => import('@/views/me')

// 业务组件-地址
const MyAddress = () => import('@/views/addressExample/myAddress')
const ConfirmOrder = () => import('@/views/addressExample/confirmOrder')

// 业务组件-卡券
const MyCoupon = () => import('@/views/couponExample/myCoupon')

// 业务组件-公共
const ShopCart = () => import('@/views/commonExample/shopCart')
const SecurityCode = () => import('@/views/commonExample/securityCode')
const FePage = () => import('@/views/commonExample/fePage')
const Base64Demo = () => import('@/views/commonExample/base64Demo')
const DiscoverDetail = () => import('@/views/commonExample/discover/detailed')

export const routes = [
  {path: '/', redirect: 'me'},
  {path: '/403', component: () => import('@/views/errorPage/403')},
  {path: '/404', component: () => import('@/views/errorPage/404')},
  {path: '/500', component: () => import('@/views/errorPage/500')},
  {
    path: '/home',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        meta: {title: '首页'},
      }
    ]
  },
  {
    path: '/message',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Message,
        name: 'message',
        meta: {title: '消息'},
      }
    ]
  },
  {
    path: '/me',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Me,
        name: 'me',
        meta: {title: '我'}
      }
    ]
  },
  {
    path: '/myAddress',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: MyAddress,
        name: 'myAddress',
        meta: {title: '收货地址管理'}
      }
    ]
  },
  {
    path: '/confirmOrder',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: ConfirmOrder,
        name: 'confirmOrder',
        meta: {title: '确认订单'}
      }
    ]
  },
  {
    path: '/myCoupon',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: MyCoupon,
        name: 'myCoupon',
        meta: {title: '卡券管理'}
      }
    ]
  },
  {
    path: '/shopCart',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: ShopCart,
        name: 'shopCart',
        meta: {title: '购物车'}
      }
    ]
  },
  {
    path: '/securityCode',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: SecurityCode,
        name: 'securityCode',
        meta: {title: '购物车'}
      }
    ]
  },
  {
    path: '/fePage',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: FePage,
        name: 'fePage',
        meta: {title: '前端分页'}
      }
    ]
  },
  {
    path: '/toBase64',
    component: BlankLayout,
    children: [
      {
        path: '',
        component: Base64Demo,
        name: 'base64Demo',
        meta: {title: '图片转base64'}
      }
    ]
  },
  {
    path: '/discover',
    component: BlankLayout,
    children: [
      {
        path: 'detailed',
        component: DiscoverDetail,
        name: 'discoverDetail',
        meta: {title: '发现文章详情'}
      }
    ]
  },


  {path: '*', redirect: '/404'}
]

Vue.use(Router)

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router