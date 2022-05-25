<template>
  <div class="login">
        <div class="title">아주모여</div>
        <div class="box sid">
            <div class="name">학번</div>
            <input type="text">
        </div>
        <div class="box pw">
            <div class="name">비밀번호</div>
            <input type="password">
        </div>
        <div class="signupButton">
             <span class="button" @click="clickSignup()">회원가입</span>
             </div>
        <div class="loginButton" @click="login()">로그인</div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Login',
  data() {
      return {
          sid : "",
          pw : ""
          }
  },
  created(){
  },
  methods: {
      clickSignup(){
          this.$store.state.showLogin = false;
          this.$store.state.showSignup = true;
      },
      login(){
          let data = {
              "sid" : this.sid,
              "pw" : this.pw
          }
          axios.post("http://localhost:1234", data);
          this.$store.state.showLogin =false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    margin-top: 20px;
    margin-bottom: 150px;
    font-size: 50px;
}
.box{
    margin-top: 30px;
    margin-left: 100px;
    padding-bottom: 50px;
    width: 600px;
}
.box .name{
    text-align: left;
    font-size: 20px;
}
input{
    position:relative;
    left: 0px;
    top: 20px;
    height: 70px;
    width: 600px;
    border: 3px solid black;
    border-radius: 5px;
    font-size: 30px;
}
.signupButton{
    margin-top: 80px;
    margin-bottom: 70px;
}
.signupButton .button:hover{
    color:#0066B3;
    text-decoration:underline;
    cursor:pointer;
}
.loginButton{

    height: 80px;
    width: 600px;
    color: white;
    padding-top: 30px;
    font-size: 30px;
    background-color: #0066B3;
    border-radius: 5px;
    margin: 0 auto;
}
.loginButton:hover{
    cursor: pointer;
}
</style>
