const app = {
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING_STATE: (state, flag) => {
      state.loading = flag
    }
  }
}

export default app
