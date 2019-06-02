import Cookies from 'js-cookie'
import {getLanguage} from '@/lang'


const app = {
  state: {
    loading: false,
    language: getLanguage(),
  },
  mutations: {
    SET_LOADING_STATE: (state, flag) => {
      state.loading = flag
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    SetLanguage({commit, state}, lang) {
      commit('SET_LANGUAGE', lang)
    }
  }
}

export default app
