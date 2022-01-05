module.exports = [
  {
    url: '/user/mock400',
    type: 'post',
    response: config => {
      return {
        code: 400,
        data: {},
        msg: '失败'
      }
    }
  },
  {
    url: '/user/mock401',
    type: 'post',
    response: config => {
      return {
        code: 401,
        data: {},
        msg: '失败'
      }
    }
  },
  {
    url: '/user/mock404',
    type: 'post',
    response: config => {
      return {
        code: 404,
        data: {},
        msg: '失败'
      }
    }
  },
  {
    url: '/user/mock500',
    type: 'post',
    response: config => {
      return {
        code: 500,
        data: {},
        msg: '失败'
      }
    }
  },
]