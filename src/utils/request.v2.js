import axios from 'axios'
import {Toast} from 'vant'

// create an axios instance
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 50 * 1000 // request timeout
})

// 在main.js设置全局的请求次数，请求的间隙
http.defaults.retry = 4
http.defaults.retryDelay = 1000

http.interceptors.request.use(config => {
  if (process.env.NODE_ENV !== 'production') {
    config.headers['tenant'] = 'bx'
  } else {
    config.headers['tenant'] = window.location.host
  }
  console.log('tenant', config.headers['tenant'])
  return config
}, error => {
  console.log(`err,${error}`)
  Promise.reject(error)
})

http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (!res.success) {
      Toast({
        position: 'bottom',
        message: res.errorMsg,
      })
      return Promise.reject(res.errorMsg)
    } else {
      return response.data
    }
  },
  (err) => {
    const config = err.config
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err)

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(err)
    }

    // Increase the retry count
    config.__retryCount += 1

    // Create new promise to handle exponential backoff
    const backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1)
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function () {
      return http(config)
    })
  }
)

export default http
