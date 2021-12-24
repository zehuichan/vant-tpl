const getters = {
  // index
  language: state => state.app.language,

  // userInfo
  userinfo: state => state.user.userinfo,

  // logs
  errorLogs: state => state.errorLog.logs
}

export default getters
