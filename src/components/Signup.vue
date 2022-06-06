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
                <input @change="this.upload" accept="image/*" type="file" name="file" id="file" class="inputfile" />
                <div @click="this.sendSidCard" class="button">사진전송</div>
                <div v-if="this.isAjou" class="isajouinfo">학생증 인식에 성공했습니다.</div>
            </div>
            <div class="content_email" v-if="!this.isCard">
            <div class="beforeSend" v-if="!this.isSend">
                <input type="text" class="inputfile" v-model="this.email" placeholder="이메일을 입력해주세요." />
                <div @click="this.emailSend" class="button">인증번호받기</div>
            </div>
            <div class="AfterSend" v-if="this.isSend">
                <input type="text" v-model="this.userCerNum" class="inputfile" placeholder="인증번호 6자리를 입력해주세요." />
                <div @click="this.sendnum6" class="button">인증하기</div>
                <div v-if="this.isAjou" class="isajouinfo">이메일 인증에 성공했습니다.</div>
            </div>
            </div>
        </div>
        <div class="box name">
            <div class="name">이름</div>
            <input type="text" :disabled="this.afterSend" v-model="this.name">
        </div>
        <div class="box sid">
            <div class="name">학번</div>
            <div class="sidBox">
                <input type="text" :disabled="this.afterSend" v-model="this.sid">
                <div class="button" @click="this.sidcheck()">중복확인</div>
            </div>
        </div>
        <div class="box class">
            <div class="name">학과</div>
            <input type="text" :disabled="this.afterSend" v-model="this.class">
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
            <div class="name">비밀번호 확인</div>
            <input type="password" v-model="this.Repw">
            <div v-if="this.pw != this.Repw" class="name" :style="{'margin-top' : 12+'px', 'color' : 'red'}">비밀번호가 다릅니다.</div>
        </div>
        <div class="box nickname last">
            <div class="name">닉네임</div>
            <div class="sidBox">
                <input type="text" v-model="this.nickname">
                <div class="button" @click="this.nicknamecheck()">중복확인</div>
            </div>
        </div>
        <div class="loginButton" @click="register()">회원가입</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data() {
      return {
          afterSend: false,
          isCard:true,
          isSend:false,
          image:"",
          name:"",
          sid:"",
          email:"",
          class:"",
          phone:"",
          pw:"",
          Repw:"",
          nickname:"",
          isAjou: false,
          issidcheck: false,
          isnicknamecheck: false,
          cerNum:"",
          userCerNum:""
          }
  },
  created(){
  },
  methods: {
      clickSignup(){
          this.$store.state.showLogin = false;
          this.$store.state.showSignup = true;
      },
      sidcheck(){
        axios.get("http://localhost:3000/auth/checkID/"+this.sid).then((e)=>{
            console.log(e)
            if(e.data.status == "fail"){
                this.$store.state.alarmMessage = "이미 등록된 회원입니다."
            }
            else{
                this.$store.state.alarmMessage = "가입이 가능한 회원입니다."
                this.issidcheck = true;
            }
        });
      },
      nicknamecheck(){


        axios.post("http://localhost:3000/auth/checkNick",{"nickname":this.nickname}).then((e)=>{
            console.log(e)
            if(e.data.status == "fail"){
                this.$store.state.alarmMessage = e.data.text
            }
            else{
                this.$store.state.alarmMessage = e.data.text
                this.isnicknamecheck = true;
            }
        });
      },
      register(){
          console.log(this.pw)
          let dataset = {
              "student_id" : this.sid,
              "name" : this.name,
              "nickname" : this.nickname,
              "email" : this.email,
              "phone_num" : this.phone,
              "department" : this.class,
              "password" : this.pw
          }
          let correct = true;
          let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
          let pattern_hanja = /[一-龥]/; // 한자체크
          if(this.isAjou == false){
                this.$store.state.alarmMessage = "학생증사진 혹은 이메일로 아주대학생임을 인증해주십시오."
                correct = false;
          }
          else if(!this.name){
                this.$store.state.alarmMessage = "이름을 입력해주십시오."
                correct = false;
          }
          else if(!this.sid){
                this.$store.state.alarmMessage = "학번을 입력해주십시오."
                correct = false;
          }
          else if(!this.class){
                this.$store.state.alarmMessage = "학과을 입력해주십시오."
                correct = false;
          }
          else if(!this.pw){
                this.$store.state.alarmMessage = "비밀번호을 입력해주십시오."
                correct = false;
          }
          else if(this.pw != this.Repw){
                this.$store.state.alarmMessage = "비밀번호을 올바르게 재입력해주십시오."
                correct = false;
          }
          else if(pattern_hanja.test(this.pw)){
                this.$store.state.alarmMessage = "비밀번호에 한자가 사용될 수 없습니다.."
                correct = false;
          }
          else if(!this.nickname){
                this.$store.state.alarmMessage = "닉네임을 입력해주십시오."
                correct = false;
          }
          else if(pattern_spc.test(this.nickname) || pattern_hanja.test(this.nickname)){
                this.$store.state.alarmMessage = "닉네임에 특수문자, 한자가 사용될 수 없습니다.."
                correct = false;
          }
          else if(this.pw.length >18){
                this.$store.state.alarmMessage = "18자리 이하의 비밀번호로 구성되어야합니다."
                correct = false;
          }
          else if(!this.issidcheck){
                this.$store.state.alarmMessage = "학번 중복확인을 해주십시오."
                correct = false;
          }
          else if(!this.isnicknamecheck){
                this.$store.state.alarmMessage = "닉네임 중복확인을 해주십시오."
                correct = false;
          }
          
          if(correct){
          axios({
              method: 'POST',
              url: 'http://localhost:3000/auth/register',
              mode: 'cors',
              data : dataset
            }).then((e)=>{
                this.$store.state.showSignup =false;
            });
            
          }
      },
      sendSidCard(){
          this.isSend = true;
          let formdata = new FormData();
          formdata.append("image", this.image)
          
          this.$store.state.alarmMessage = "10초정도 소요됩니다.";
          axios({
              method: 'POST',
              url: 'http://localhost:7000/card',
              mode: 'cors',
              data : formdata,
              headers: {"Content-Type" : "multipart/form-data"} 
            }).then((e)=>{
                let array = e.data.split(',')
                this.name = array[0].split("'")[3];
                this.sid = array[1].split("'")[3];
                this.class = array[3].split("'")[3];
                this.isAjou = array[5].split("'")[3] == "yes"?true:false;
                if(this.isAjou == false){
                    this.$store.state.alarmMessage = "사진정보가 올바르지 않습니다. 다시 찍어서 전송하여주십시오."
                }
                else{
                    this.afterSend = true
                }
            }).catch((err)=>{
              this.$store.state.alarmMessage = "사진이 없습니다."
          });
      },
      upload(e){
          let file = e.target.files[0];
          this.image = file;
      },
      emailSend(){
          if(this.email.indexOf("@ajou.ac.kr") != -1){
              axios.post("http://localhost:3000/auth/email", {'email':this.email}).then((e)=>{
                console.log(e)
                  if(e.data.status == "success"){
                      this.$store.state.alarmMessage = "이메일 전송에 성공하였습니다. 인증번호를 입력해주세요."
                      this.cerNum = e.data.number
                      this.isSend = true;
                  }
                  else{
                    this.$store.state.alarmMessage = "이메일 전송에 실패하였습니다."

                  }

          }).catch((err)=>{
            this.$store.state.alarmMessage = "이메일 전송에 실패하였습니다."
          })
          }
          else{
              this.$store.state.alarmMessage = "아주대 이메일이 아닙니다."
          }
      },
      sendnum6(){
          console.log(this.userCerNum);
          console.log(this.cerNum)
          console.log(this.userCerNum == this.cerNum)
          if(this.userCerNum == this.cerNum){
              this.isAjou = true;
              this.$store.state.alarmMessage = "이메일 인증에 성공했습니다."
          }
          else{
              this.$store.state.alarmMessage = "인증번호가 다릅니다."
          }
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
.certification .isajouinfo{
    position: relative;
    width: 300px;
    top: 45px;
    left: -350px;
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
.box.nickname input{
    width: 450px;
}
.box.nickname .sidBox div{
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
    margin-bottom: 50px;
}
.loginButton:hover{
    cursor: pointer;
}
.button{
    cursor: pointer;
}
</style>
