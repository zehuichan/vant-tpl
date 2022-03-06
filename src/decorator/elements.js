import { Toast, Dialog } from 'vant'

export function loading(message = '加载中...', options = {}, cb) {
  return function (target, name, descriptor) {
    const original = descriptor.value
    descriptor.value = function (...args) {
      const loading = Toast.loading({
        message,
        forbidClick: true,
        ...options
      })
      const returnValue = original.apply(this, args)

      loading.clear()

      return returnValue
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