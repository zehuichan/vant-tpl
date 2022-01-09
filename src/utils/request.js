import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

let message = ' (-。-)!!! 服务器开小差了，请稍后重试。'

// create an axios instance
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50 * 1000
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(`err,${error}`)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      Toast(`status: ${res.code}, ${message}`)
      void store.dispatch('errorLog/addErrorLog', {
        message: message,
        name: 'httpRequestError',
        response,
        url: location.href
      })
      return Promise.reject({ message: message, name: 'httpRequestError', response })
    }
  },
  (error) => {
    console.log(`err,${error}`)
    Toast(`err, ${error}`)
    void store.dispatch('errorLog/addErrorLog', {
      message: message,
      name: 'httpRequestError',
      response: error.response,
      url: location.href
    })
    return Promise.reject(error)
  }
)

export default http
