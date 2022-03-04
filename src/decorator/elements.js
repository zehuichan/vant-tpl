import { Toast, Dialog } from 'vant'

export function loading(message = '加载中...', cb) {
  return function (target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function (...rest) {
      const loading = await Toast.loading({
        message,
        forbidClick: true
      })
      try {
        return await fn.call(this, ...rest)
      } catch (error) {
        cb && cb.call(this, error, ...rest)
      } finally {
        loading.clear()
      }
    }
  }
}

export function confirm(message, title = '提示', cancelFn) {
  return function (target, name, descriptor) {
    const originFn = descriptor.value
    descriptor.value = function (...rest) {
      Dialog
        .confirm({
          message,
          title
        })
        .then(originFn.bind(this, ...rest))
        .catch(() => {
        })
    }
  }
}

export function alert(message, title = '提示') {
  return function (target, name, descriptor) {
    const originFn = descriptor.value
    descriptor.value = async function (...rest) {
      await Dialog.alert({
        message,
        title
      })
      originFn.apply(this, rest)
    }
  }
}