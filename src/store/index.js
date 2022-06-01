import { createStore } from 'vuex'

export default createStore({
  state: {
    token : "",
    boardCardArr : [
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 0, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 9명", currentNum : 3, maxNum : 9, thumbnail : "logo.png", idx : 1, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 8명", currentNum : 3, maxNum : 8, thumbnail : "logo.png", idx : 2, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 7명", currentNum : 3, maxNum : 7, thumbnail : "logo.png", idx : 3, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 11", currentNum : 3, maxNum : 11, thumbnail : "logo.png", idx : 4, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 5, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 6, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "농구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 7, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 8, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "배구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 9, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 검색키워드 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 10, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 사람 선착 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 11, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "축구할 검색키워드 10명", currentNum : 3, maxNum : 10, thumbnail : "logo.png", idx : 12, text:"내용"},
    {host:"asdf", category:"운동", showPhone:false, anonymous:true, title : "아무거나 1명", currentNum : 3, maxNum : 1, thumbnail : "logo.png", idx : 13, text:"내용"}],
    nickname : "",
    showLogin : false,
    showSignup : false,
    CurrentPage : "Board",
    CurrentIdx : 0,
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
