import Vue from 'vue'
import {Toast} from 'vant'
import axios from 'axios'
import store from '@/store'
import {getWXToken} from '@/utils/auth'

// create an axios instance
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

http.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['authorization'] = getWXToken()
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
      Toast({
        position: 'bottom',
        message: res.resMsg
      })
      return Promise.reject(res.resMsg)
    } else {
      return response.data
    }
  },
  (error) => {
    console.log(`err,${error}`)
    Toast({
      position: 'bottom',
      message: error
    })
    return Promise.reject(error)
  }
)

export default http
