const prefix = process.env.VUE_APP_WECHAT_APPID

class Cache {
  setItem(key, value) {
    try {
      window.localStorage.setItem(prefix + key, JSON.stringify(value))
    } catch (e) {
      console.log(e)
    }
  }

  getItem(key) {
    try {
      return JSON.parse(window.localStorage.getItem(prefix + key))
    } catch (e) {
      return ''
    }
  }

  removeItem(key) {
    return window.localStorage.removeItem(prefix + key)
  }

  setSession(key, value) {
    try {
      window.sessionStorage.setItem(prefix + key, JSON.stringify(value))
    } catch (e) {
      console.log(e)
    }
  }

  getSession(key) {
    try {
      return JSON.parse(window.sessionStorage.getItem(prefix + key))
    } catch (e) {
      return ''
    }
  }

  removeSession(key) {
    return window.sessionStorage.removeItem(prefix + key)
  }
}


export default new Cache()
