import { nextTick, ref, shallowRef, watchEffect } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { wxconfig } from '@/api/user'

export default function useWeixin(options = { debug: false }) {
  const { load } = useScriptTag('//res.wx.qq.com/open/js/jweixin-1.6.0.js')
  const ready = ref(false)
  const instance = shallowRef(null)

  watchEffect(!ready.value && initWxConfig)

  async function initWxConfig() {
    await load()
    await nextTick()
    instance.value = window.wx
    try {
      const url = encodeURIComponent(location.href.split('#')[0])
      const res = await wxconfig(url)
      const config = Object.assign({}, res, options)
      instance.value.config(config)
      instance.value.ready(() => {
        ready.value = true
      })
      instance.value.error(() => {
        ready.value = false
      })
    } catch (e) {
      ready.value = false
    }
  }

  return [ready, instance]
}
