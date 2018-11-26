import {saveToLocal, loadFromLocal} from '@/utils'

const auth = {
  state: {
    token: loadFromLocal('token')
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  }
}

export default auth
