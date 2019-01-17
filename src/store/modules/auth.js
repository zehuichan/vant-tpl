import {getWXToken, setToken, removeToken} from '@/utils/auth'

const auth = {
  state: {
    token: getWXToken()
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  }
}

export default auth
