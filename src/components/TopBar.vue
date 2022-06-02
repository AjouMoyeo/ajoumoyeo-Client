<template>
  <div class="topBar">
    <div class="blur" v-if="this.$store.state.showLogin || this.$store.state.showSignup"></div>
    <div class="login Box" v-if="this.$store.state.showLogin">
        <span class="loginClose" @click="clickLclose()">X</span>
        <login></login>
    </div>
    <div class="signup Box" v-if="this.$store.state.showSignup">
        <span class="signupClose" @click="clickSclose()">X</span>
        <Signup></Signup>
    </div>
    <div class="title">아주모여</div>
    <div class="userInfo">
        <div v-if="!this.$store.state.token" class="beforeLogin">
            <div class="loginButton" @click="clickLogin()">
                로그인
            </div>
        </div>
        <div v-if="this.$store.state.token" class="afterLogin">
            <div class="nickname">{{ this.$store.state.nickname }} 님</div>
            <div class="logoutButton" @click="clickLogout()">
                로그아웃
            </div>
        </div>
    </div>
    <hr>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default {
  name: 'TopBar',
  components: {
    Login,
    Signup
  },
  data() {
      return {
          }
  },
  created(){
  },
  methods: {
      clickLclose(){
        this.$store.state.showLogin = false;
      },
      clickSclose(){
        this.$store.state.showSignup = false;
      },
      clickLogin(){
        this.$store.state.showLogin = true;
      },
      clickLogout(){
        this.$store.state.token = "";
        this.$store.state.nickname = "";
        localStorage.clear()
        this.$store.state.CurrentPage = 'Board'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blur{
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width:100%;
    background-color: #ddd;
    opacity: 0.9;
    z-index: 1;
    overflow: hidden;
}
.Box{
    position: absolute;
    border: 3px solid black;
    border-radius: 7px;
    margin-left: 50%;
    height: 80%;
    width: 800px;
    left: -400px;
    top: 10%;
    background-color: white;
    z-index: 2;
    overflow: auto;
}
.loginClose{
    position: relative;
    top:20px;
    left:330px;
    font-size: 30px;
}
.loginClose:hover{
    color:#0066B3;
    cursor: pointer;
}
.signupClose{
    position: relative;
    top:20px;
    left:330px;
    font-size: 30px;
}
.signupClose:hover{
    color:#0066B3;
    cursor: pointer;
}
.title{
    color: black;
    font-size: 70px;
    padding-top: 20px;
    margin-bottom: 10px;
    cursor:default;
}
.userInfo{
    width : 220px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 30px;
}
.loginButton{
    position: relative;
    height: 25px;
    width: 100px;
    top: 1px;
    left: 120px;
    padding-top: 3px;
    color:white;
    border-radius: 5px;
    background-color: #0066B3;
    cursor: pointer;
}
.afterLogin{
    display: flex;
    flex-direction: row;
}
.nickname{
    position: relative;
    height: 25px;
    width: 100px;
    top: 3px;
    left: 30px;
}
.logoutButton{
    position: relative;
    height: 25px;
    width: 100px;
    top: 1px;
    left: 20px;
    padding-top: 3px;
    color:white;
    border-radius: 5px;
    background-color: #0066B3;
    cursor: pointer;
}
hr{
    border: solid 3px black;
}
</style>
