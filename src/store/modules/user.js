import { userInfo } from '@/api/user'

const state = {
  userinfo: null,
}

const mutations = {
  SET_USERINFO: (state, userinfo) => {
    state.userinfo = userinfo
  },
}

const actions = {
  // 获取用户信息
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      userInfo().then((res) => {
        commit('SET_USERINFO', res.data)
        resolve()
      })
    })
  },

  // 重置用户信息
  resetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_USERINFO', null)
      resolve()
    })
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
