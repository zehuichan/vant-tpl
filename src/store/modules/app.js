import Cookies from 'js-cookie'
import {getLanguage} from '@/lang'


const app = {
  state: {
    loading: false,
    language: getLanguage(),
    tabbar: true
  },
  mutations: {
    SET_LOADING_STATE: (state, flag) => {
      state.loading = flag
    },
    SET_TAB_BAR_STATE: (state, tabbar) => {
      state.tabbar = tabbar
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    SetLoadingState({commit, state}, flag) {
      commit('SET_LOADING_STATE', flag)
    },
    SetTabBarState({commit, state}, flag) {
      commit('SET_TAB_BAR_STATE', flag)
    },
    SetLanguage({commit, state}, lang) {
      commit('SET_LANGUAGE', lang)
    }
  }
}

export default app
