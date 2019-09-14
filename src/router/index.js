import Vue from 'vue'
import Router from 'vue-router'

// basic components
const Layout = () => import('@/layout')

// view components
const Home = () => import('@/views/home')
const Message = () => import('@/views/message')
const Me = () => import('@/views/me')

// 业务组件-地址
const MyAddress = () => import('@/views/addressExample/myAddress')
const ChosenAddress = () => import('@/views/addressExample/chosenAddress')
const ConfirmOrder = () => import('@/views/addressExample/confirmOrder')

// 业务组件-卡券
const MyCoupon = () => import('@/views/couponExample/myCoupon')

// 业务组件-公共
const FePage = () => import('@/views/commonExample/fePage')
const Base64Demo = () => import('@/views/commonExample/base64Demo')


Vue.use(Router)

export const routes = [
  {path: '/', redirect: 'me'},
  {path: '/403', component: () => import('@/views/errorPage/403')},
  {path: '/404', component: () => import('@/views/errorPage/404')},
  {path: '/500', component: () => import('@/views/errorPage/500')},
  {
    path: '/home',
    component: Layout,
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
    component: Layout,
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
    component: Layout,
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
    component: Layout,
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
    path: '/chosenAddress',
    component: Layout,
    children: [
      {
        path: '',
        component: ChosenAddress,
        name: 'chosenAddress',
        meta: {title: '选择收货地址'}
      }
    ]
  },
  {
    path: '/confirmOrder',
    component: Layout,
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
    component: Layout,
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
    path: '/fePage',
    component: Layout,
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
    component: Layout,
    children: [
      {
        path: '',
        component: Base64Demo,
        name: 'base64Demo',
        meta: {title: '图片转base64'}
      }
    ]
  },


  {path: '*', redirect: '/404'}
]

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
