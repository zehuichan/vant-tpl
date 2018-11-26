import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import {saveToLocal, loadFromLocal} from '@/utils'
import {ToastPlugin} from 'vux'

Vue.use(ToastPlugin, {position: 'top'})

const TokenKey = 'authorization'

// create an axios instance
const http = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

http.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['authorization'] = loadFromLocal('token')
  }
  return config
}, error => {
  console.log(`err,${error}`)
  Promise.reject(error)
})

http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.res !== 1) {
      Vue.$vux.toast.text(res.resMsg, 'top')
      return Promise.reject(res.resMsg)
    } else {
      return response.data
    }
  },
  (error) => {
    console.log(`err,${error}`)
    Vue.$vux.toast.text(error, 'top')
    return Promise.reject(error)
  }
)

export default http
