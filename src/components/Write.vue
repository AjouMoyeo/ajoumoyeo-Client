<template>
  <div class="write">
      <div class="title">
          <input type="text" placeholder="제목입력"/>
          <div class="button" @click="this.$store.state.CurrentPage = 'Board'">X</div>
      </div>
      <div class="option">
          <div class="image">
            <img :src="this.preview">
            <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
          </div>
          <div class="options">
            <div class="box">
                <div class="name">카테고리</div>
                <select class="select" v-model="category">
                    <option :value="{name:'운동'}">운동</option>
                </select>
            </div>
            <div class="box">
                <div class="name">목표인원수</div>
                <input class="num" type="text"/>
            </div>
            <div class="box">
                <div class="name">번호공개</div>
                <div class="check" :class="{ 'select': this.showPhone}" @click="this.showPhone = !this.showPhone"></div>
            </div>
            <div class="box">
                <div class="name">익명여부</div>
                <div class="check" :class="{ 'select': this.anonymous}" @click="this.anonymous = !this.anonymous"></div>
            </div>
          </div>
      </div>
      <div class="text">
          <div class="title">내용</div>
          <textarea></textarea>
          <div class="button">게시글 작성</div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Write',
  data() {
      return {
          imgsrc: String,
          category: String,
          showPhone: Boolean,
          anonymous: Boolean,
          preview:require("../assets/logo.png")
          }
  },
  created(){
      this.imgsrc = ""

      this.showPhone = false;
      this.anonymous = false;
  },
  methods: {
      upload(e){
          let file = e.target.files[0];
          console.log(file)
          if(file){
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result
                }
                reader.readAsDataURL(file)
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .write{
        width: 1200px;
        height: 1000px;
        margin: 0 auto;
        margin-top: 60px;
        border: 2px solid black;
        border-radius: 7px;
        display:flex;
        flex-direction: column;
    }
    .title{
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
        left: 30px;
        display: flex;
        justify-content: space-between;
    }
    .title input{
        border: none;
        height: 50px;
        width: 600px;
        font-size: 30px;
        border-bottom: 3px solid black;
    }
    .title input:focus{
        outline:none;
    }
    .title .button{
        font-size: 25px;
        position: relative;
        right: 60px;
    }
    .title .button:hover{
        color: #0066B3;
        cursor: pointer;
    }
    .option{
        height: 400px;
        display: flex;
        flex-direction: row;
    }
    .option .image{
        margin-left: 40px;
        width: 400px;
        border: 3px solid black;
    }
    .option .image img{
        margin-top:20px;
        width: 300px;
        height: 300px;
    }
    .option .image input{
        position: relative;
        top : 20px;
        left: -30px;
        width: 300px;
    }
    .option .image input::file-selector-button{
        font-family: 'SuseongDotum';
        color : #0066B3;
        background-color: white;
        cursor: pointer;;
        border : 3px solid #0066B3;
    }
    .option .image input::file-selector-button:hover{
        background-color: #0066B3;
        color:white
    }
    .option .options{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 50px;
        width: 650px;
    }
    .option .options .box{
        font-size: 30px;
        text-align: left;
        display: flex;
        flex-direction: row;
    }
    .option .options .box .name{
        width: 200px;
    }
    .option .options .box .select{
        font-family: 'SuseongDotum', Helvetica, Arial, sans-serif;
        font-size: 20px;
        width: 200px;
    }
    .option .options .box .num{
        font-family: 'SuseongDotum', Helvetica, Arial, sans-serif;
        font-size: 20px;
        width: 200px;
    }
    .option .options .box .check{
        margin-top: 3px;
        width: 30px;
        height: 30px;
        border: 3px solid black;
        cursor: pointer;
    }
    .option .options .box .check.select{
        background-color: #0066B3;
    }

    .text{
        margin-top: 20px;
        height: 500px;
    }
    .text .title{
        font-size: 25px;
    }
    .text textarea{
        font-family: 'SuseongDotum', Helvetica, Arial, sans-serif;
        margin-top: 10px;
        width: 1100px;
        height: 350px;
        resize: none;
        font-size: 15px;
    }
    .text .button{
        position: relative;
        top: 10px;
        left: 1030px;
        width: 120px;
        padding-top: 8px;
        border-radius: 7px;
        height: 30px;
        background-color: #0066B3;
        color:white;
        cursor: pointer;
    }
</style>
