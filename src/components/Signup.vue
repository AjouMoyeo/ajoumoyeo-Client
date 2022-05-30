<template>
  <div class="Signup">
        <div class="title">아주모여</div>
        <div class="certification">
            <hr>
            <div class="nav">
                <div class="button" @click="this.isCard=true" :class="{'select' : this.isCard}">학생증 사진</div>
                <div class="button" @click="this.isCard=false" :class="{'select' : !this.isCard}">이메일 인증</div>
            </div>
            <div class="content_card" v-if="this.isCard">
                <input @change="this.upload" accept="image/*" type="file" id="file" class="inputfile" />
                <div @click="this.send" class="button">사진전송</div>
            </div>
            <div class="content_email" v-if="!this.isCard">
            <div class="beforeSend" v-if="!this.isSend">
                <input type="text" class="inputfile" placeholder="이메일을 입력해주세요." />
                <div @click="this.send" class="button">인증번호받기</div>
            </div>
            <div class="AfterSend" v-if="this.isSend">
                <input type="text" class="inputfile" placeholder="인증번호 6자리를 입력해주세요." />
                <div @click="this.send" class="button">인증하기</div>
            </div>
            </div>
        </div>
        <div class="box name">
            <div class="name">이름</div>
            <input type="text" v-model="this.name">
        </div>
        <div class="box sid">
            <div class="name">학번</div>
            <div class="sidBox">
                <input type="text" v-model="this.sid">
                <div class="button">중복확인</div>
            </div>
        </div>
        <div class="box class">
            <div class="name">학과</div>
            <input type="text" v-model="this.class">
        </div>
        <div class="box phone">
            <div class="name">전화번호</div>
            <input type="text" v-model="this.phone">
        </div>
        <div class="box pw">
            <div class="name">비밀번호</div>
            <input type="password" v-model="this.pw">
        </div>
        <div class="box pwRe">
            <div class="password">비밀번호 확인</div>
            <input type="text">
        </div>
        <div class="box nickname last">
            <div class="name">닉네임</div>
            <input type="text" v-model="this.nickname">
        </div>
        <div class="loginButton" @click="login()">회원가입</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data() {
      return {
          isCard:true,
          isSend:false,
          image:"",
          name:"",
          sid:"",
          class:"",
          phone:"",
          pw:"",
          nickname:""
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
              "student_id" : this.sid,
              "name" : this.name,
              "nickname" : this.nickname,
              "email" : "aaa",
              "birth" : "2022-05-10",
              "phone_num" : this.phone,
              "department" : this.class,
              "password" : this.pw,
          }
          axios.post("http://localhost:3000/auth/register", data);
          this.$store.state.showLogin =false;
      },
      send(){
          this.isSend = true;
          let formdata = new FormData();
          formdata.append("image", this.image)
          axios.post("http://localhost:1234", formdata);
      },
      upload(e){
          let file = e.target.files[0];
          this.image = file;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 35px;
}
.certification{
    display: flex;
    flex-direction: column;
}
.certification .nav{
    margin-left: 100px;
}
.certification .button{
    width: 100px;
    background-color: #0066B3;
    border-radius: 7px 7px 0px 0px;
    border: 2px solid black;
    cursor: pointer;
    border-bottom: 0px;
}
.certification .button.select{
    background-color: white;
    cursor:default;
}
.certification hr{
    position: relative;
    top:25px;
    left:307px;
    width: 396px;
    margin : 0;
    height: 2px;
    background-color: black;
}
.certification .content_card{
    height: 100px;
    border: 2px solid black;
    border-top:0px;
    width: 600px;
    margin-left: 100px;
    display: flex;
}
.certification .content_card input{
    position: relative;
    top : 10px;
    left: 10px;
    width: 300px;
}
.certification .content_card input::file-selector-button{
    font-family: 'SuseongDotum';
    color : #0066B3;
    background-color: white;
    text-decoration:underline;
    cursor: pointer;;
    border : 0px;
}
.certification .content_card .button{
    position: relative;
    top : 5px;
    left : 10px;
    padding-top : 5px;
    height: 25px;
    width: 120px;
    border-radius: 7px;
    border:none;
    color: white;
    background-color: #0066B3;
    cursor: pointer;
}
.certification .content_email{
    height: 100px;
    border: 2px solid black;
    border-top:0px;
    width: 600px;
    margin-left: 100px;
}
.certification .content_email .beforeSend{
    display:flex;
}
.certification .content_email .AfterSend{
    display:flex;
}
.certification .content_email input{
    position: relative;
    top : 10px;
    left : 10px;
    height: 30px;
    width : 400px;
    border: none;
    border-bottom: 3px solid black;
}
.certification .content_email input:focus{
    outline:none;
}
.certification .content_email .button{
    position: relative;
    top : 13px;
    left : 30px;
    padding-top : 5px;
    height: 25px;
    width: 120px;
    border-radius: 7px;
    color: white;
    background-color: #0066B3;
    cursor: pointer;
}
.nav{
    display: flex;
}
.box{
    margin-bottom: 5px;
    margin-left: 100px;
    padding-bottom: 20px;
    width: 600px;
}
.sidBox{
    display: flex;
    justify-content: space-between;
}
.box.sid input{
    width: 450px;
}
.box.sid .sidBox div{
    margin-top: 12px;
    padding-top : 15px;
    height: 40px;
    width:120px;
    border-radius: 7px;
    color: white;
    background-color: #0066B3;
}
.box .name{
    text-align: left;
    font-size: 15px;
}
.box.last{
  margin-bottom: 20px;
}
.box input{
    position:relative;
    left: 0px;
    top: 10px;
    height: 50px;
    width: 600px;
    border: 3px solid black;
    border-radius: 5px;
    font-size: 20px;
}
.loginButton{

    height: 50px;
    width: 600px;
    color: white;
    padding-top: 12px;
    font-size: 20px;
    background-color: #0066B3;
    border-radius: 5px;
    margin: 0 auto;
}
.loginButton:hover{
    cursor: pointer;
}
</style>
