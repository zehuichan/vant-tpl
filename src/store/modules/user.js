// import {getUserInfo, loginByTel} from '@/api/user'

const user = {
  state: {
    avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132',
    cellphone: '15800066380',
    username: 'chan'
  },
  mutations: {
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_CELLPHONE(state, cellphone) {
      state.cellphone = cellphone
    },
    SET_USER_NAME(state, username) {
      state.username = username
    }
  },
  actions: {
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
    //         commit('SET_AVATAR', res.obj.headImgUrl)
    //         commit('SET_IDENTITY_FLAG', res.obj.identityFlag)
    //         commit('SET_NICKNAME', res.obj.wxNickName)
    //         resolve(res)
    //       } else {
    //         reject(res)
    //       }
    //     }).catch(err => [
    //       reject(err)
    //     ])
    //   })
    // }
  }
}

export default user
