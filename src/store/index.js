import { createStore } from 'vuex'

export default createStore({
  state: {
    token : "",
    boardCardArr : [],
    nickname : "",
    sid: "",
    showLogin : false,
    showSignup : false,
    CurrentPage : "Board",
    CurrentIdx : 0,
    alarmMessage : "",
    modifyMode : false,
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
