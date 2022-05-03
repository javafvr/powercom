const user = {
  namespaced: true,
  state: () => ({
    user: {
      email: "",
      url: "",
      title: "",
      image: "",
    },
  }),
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
  },
  actions: {
    // async login ({ commit }, details) {
      
    // },
    // async register ({ commit }) {

    // },
    // async logout ({ commit }) {

    // }
  },
  // mutations, actions, getters...
};

export default user;
