import { getLanguage } from '@/lang'
// utils
import cache from '@/utils/cache'

const state = {
  language: getLanguage()
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    cache.setItem('language', language)
  }
}

const actions = {
  setLanguage({ commit, state }, lang) {
    commit('SET_LANGUAGE', lang)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
