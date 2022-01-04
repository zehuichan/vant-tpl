import request from '@/utils/request'

export function mockData(url) {
  return request({
    url: '/user/' + url,
    method: 'post',
  })
}