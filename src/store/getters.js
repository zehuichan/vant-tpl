const getters = {
  loading: state => state.app.loading,


  avatar: state => state.user.avatar,
  identityFlag: state => state.user.identityFlag,
  wxNickName: state => state.user.wxNickName,

  token: state => state.auth.token
}

export default getters
