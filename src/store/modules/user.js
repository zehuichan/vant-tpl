// import {getUserInfo, loginByTel} from '@/api/user'

const user = {
  state: {
    avatar: '',
    identityFlag: '',
    wxNickName: ''
  },
  mutations: {
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_IDENTTITYFLAG(state, ident) {
      state.identityFlag = ident
    },
    SET_WXNICKNAME(state, nickName) {
      state.wxNickName = nickName
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
    //         commit('SET_IDENTTITYFLAG', res.obj.identityFlag)
    //         commit('SET_WXNICKNAME', res.obj.wxNickName)
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
