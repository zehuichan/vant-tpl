// import {getUserInfo, loginByTel} from '@/api/user'

const state = {
  userinfo: {
    avatar: '',
    cellphone: '',
    username: '',
    github: ''
  }
}

const mutations = {
  SET_USERINFO: (state, userinfo) => {
    state.userinfo = userinfo
  },
}

const actions = {
  // 手机快速注册
  // LoginByTel({commit}, dataForm) {
  //   return new Promise((resolve, reject) => {
  //     loginByTel({tel: dataForm.tel, type: dataForm.type}).then((res) => {
  //       if (res.res === 1) {
  //         resolve()
  //       }
  //     }).catch(err => {
  //       reject(err)
  //     })
  //   })
  // },

  // 获取用户信息
  // GetUserInfo({commit, state}) {
  //   return new Promise((resolve, reject) => {
  //     getUserInfo().then((res) => {
  //       if (res.res === 1) {
  //         commit('SET_AVATAR', res.obj.avatar)
  //         commit('SET_CELL_PHONE', res.obj.cellphone)
  //         commit('SET_USER_NAME', res.obj.username)
  //         resolve(res)
  //       } else {
  //         reject(res)
  //       }
  //     }).catch(err => [
  //       reject(err)
  //     ])
  //   })
  // },

  // 获取用户信息
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const userinfo = {
        avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132',
        cellphone: '15800066380',
        username: 'chan_',
        realname: '陈泽辉',
        github: 'https://github.com/zehuichan'
      }
      commit('SET_USERINFO', userinfo)
      resolve()
    })
  },

  // 重置用户信息
  resetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_USERINFO', Object.assign(state, {}))
      resolve()
    })
  },
}


export default {
  namespaced: 'user',
  state,
  mutations,
  actions
}
