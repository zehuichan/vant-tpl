const getters = {
  // index
  language: state => state.app.language,

  // userInfo
  avatar: state => state.user.avatar,
  cellphone: state => state.user.cellphone,
  username: state => state.user.username,
  github: state => state.user.github,
  level: state => state.user.level,

  // logs
  errorLogs: state => state.errorLog.logs
}

export default getters
