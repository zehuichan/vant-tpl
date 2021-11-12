import { getLanguage, initVantLocale } from '@/lang'
// utils
import cache from '@/utils/cache'

const state = {
  language: getLanguage()
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    initVantLocale(language)
    cache.setItem('language', language)
  }
}

const actions = {
  setLanguage({ commit, state }, lang) {
    commit('SET_LANGUAGE', lang)
  }
}

export default {
  namespaced: 'app',
  state,
  mutations,
  actions
}
