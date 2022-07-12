import request from '@/utils/request'

const IS_PROD = ['production', 'staging', 'prod'].includes(process.env.NODE_ENV)

export function wxconfig(REDIRECT_URI) {
  return request({
    url: IS_PROD
      ? `/api/wechat/jssdk/config?REDIRECT_URI=${REDIRECT_URI}`
      : `/api/wechat/jssdk/configTest?REDIRECT_URI=${REDIRECT_URI}`,
    method: 'post'
  })
}

export function userLogin() {
  return request({
    url: '/user/login',
    method: 'post',
  })
}

export function userInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}