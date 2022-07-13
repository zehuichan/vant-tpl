const state = {
  token: undefined,
  userinfo: null
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
      commit('SET_USERINFO', {
        avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132',
        cellphone: '15800066380',
        username: 'chan_',
        realname: '陈泽辉',
        github: 'https://github.com/zehuichan'
      })
      resolve()
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
