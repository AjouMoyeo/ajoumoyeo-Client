import { createStore } from 'vuex'

export default createStore({
  state: {
    token : "",
    boardCardArr : [],
    nickname : "",
    showLogin : false,
    showSignup : false,
    CurrentPage : "Board",
    CurrentIdx : 0,
    alarmMessage : ""
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
