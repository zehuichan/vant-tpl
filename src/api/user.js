import request from '@/utils/request'

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