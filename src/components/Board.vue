<template>
  <div class="nav">
      <div class="searchBar">
        <input type="text" v-model="searchWord">
        <div class="searchButton" @click="search()">
              검색
        </div>
      </div>
      <div v-if ="this.$store.state.token" class="writeButton" @click="this.$store.state.CurrentPage = 'Write'">
          게시글작성
      </div>
  </div>
  <div class="board">
      <div class="col">
        <div class="card left" v-if="this.Card[0][0]"  @click="clickContent(this.Card[0][0].post_id)">
            <img :src="'http://localhost:3000'+this.Card[0][0].url"/>
            <div class="smallBox">
                <div class="title">
                    {{this.Card[0][0].title}}
                </div>
                <div class="">
                    ({{this.Card[0][0].cur_num}}/{{this.Card[0][0].goal_num}})
                </div>
            </div>
        </div>
        <div class="card right" v-if="this.Card[0][1]"  @click="clickContent(this.Card[0][1].post_id)">
            <img :src="'http://localhost:3000'+this.Card[0][1].url"/>
            <div class="smallBox">
                <div class="title">
                    {{this.Card[0][1].title}}
                </div>
                <div class="">
                    ({{this.Card[0][1].cur_num}}/{{this.Card[0][1].goal_num}})
                </div>
            </div>
        </div>
      </div>
      <div class="col">
        <div class="card left" v-if="this.Card[1][0]" @click="clickContent(this.Card[1][0].post_id)">
            <img :src="'http://localhost:3000'+this.Card[1][0].url"/>
            <div class="smallBox">
                <div class="title">
                    {{this.Card[1][0].title}}
                </div>
                <div class="">
                    ({{this.Card[1][0].cur_num}}/{{this.Card[1][0].goal_num}})
                </div>
            </div>
        </div>
        <div class="card right" v-if="this.Card[1][1]" @click="clickContent(this.Card[1][1].post_id)">
            <img :src="'http://localhost:3000'+this.Card[1][1].url"/>
            <div class="smallBox">
                <div class="title">
                    {{this.Card[1][1].title}}
                </div>
                <div class="">
                    ({{this.Card[1][1].cur_num}}/{{this.Card[1][1].goal_num}})
                </div>
            </div>
        </div>
      </div>
      <div class="col">
        <div class="card left" v-if="this.Card[2][0]" @click="clickContent(this.Card[2][0].post_id)">
            <img :src="'http://localhost:3000'+this.Card[2][0].url"/>
            <div class="smallBox">
                <div class="title">
                    {{this.Card[2][0].title}}
                </div>
                <div class="">
                    ({{this.Card[2][0].cur_num}}/{{this.Card[2][0].goal_num}})
                </div>
            </div>
        </div>
        <div class="card right" v-if="this.Card[2][1]" @click="clickContent(this.Card[2][1].post_id)">
            <img :src="'http://localhost:3000'+this.Card[2][1].url"/>
            <div class="smallBox">
                <div class="title">
                    {{this.Card[2][1].title}}
                </div>
                <div class="">
                    ({{this.Card[2][1].cur_num}}/{{this.Card[2][1].goal_num}})
                </div>
            </div>
        </div>
      </div>
  </div>
  <div class="index">
    <div v-for="(item, idx) in this.indexArr">
        <div :class="{'select' : (idx == (this.index))}" class="numButton" @click="clickIndex(idx)">
            {{item.num}}
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Board',
  data() {
      return {
            Card : Array,
            SearchCardArr : Array,
            searchState : Boolean,
            index : Number,
            indexArr : Array,
            searchWord : String
          }
  },
  computed:{
      boardCardArr() {
          return this.$store.state.boardCardArr
      }
  },
  created(){
      

      this.LoadBoard();
      this.index = 0;
      this.indexArr = [];
      this.searchWord = "";
      this.searchState = false;
      this.initIdx();
      this.initBoard();
  },
  methods: {
      LoadBoard(){
          axios.get("http://localhost:3000/post").then((e)=>{
              this.$store.state.boardCardArr = e.data.data;
              this.initIdx();
              console.log("asdf")
              this.initBoard();
          })
      },
      initBoard(){
        let i, j;

        for(i = 0;i<3;i++){
            this.Card[i] = [];
            for(j = 0; j<2; j++){
                  if(this.boardCardArr[this.index*6+(2*i+j)]){
                      this.Card[i].push(this.boardCardArr[this.index*6+(2*i+j)])
                      console.log(this.Card[i])
                  }
              }
        }
      },
      searchBoard(){
        let i, j;

        for(i = 0;i<3;i++){
            this.Card[i] = [];
            for(j = 0; j<2; j++){
                  if(this.SearchCardArr[this.index*6+(2*i+j)]){
                      this.Card[i].push(this.SearchCardArr[this.index*6+(2*i+j)])
                  }
              }
        }
      },
      initIdx(){
          this.indexArr = [];
          this.index=0;
          let i;
          for(i=1;i<=(this.boardCardArr.length%6==0?this.boardCardArr.length/6:parseInt(this.boardCardArr.length/6)+1);i++){
              this.indexArr[i-1]={num:i};
          }
      },
      clickIndex(num){
          this.index = num;
          if(this.searchState == false){
              this.initBoard();
          }
          else{
              this.searchBoard();
          }
      },
      search(){
          if(this.serachWord == ""){
              this.initIdx();
              this.initBoard();
                this.searchState = false;
          }
          else{
              this.SearchCardArr = [];
              this.boardCardArr.forEach(ele=>{
                  if(ele.title.indexOf(this.searchWord) != -1){
                      this.SearchCardArr.push(ele);
                  }
              })
                this.searchState = true;

          this.indexArr = [];
          this.index=0;
          let i;
          for(i=1;i<=(this.SearchCardArr.length%6==0?this.SearchCardArr.length/6:parseInt(this.SearchCardArr.length/6)+1);i++){
              this.indexArr[i-1]={num:i};
          }
              this.searchBoard();
          }
        
          this.searchWord = "";

      },
      clickContent(num){
        if(this.$store.state.nickname){
            this.$store.state.CurrentIdx = num;
            this.$store.state.CurrentPage = 'Content'
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    height: 70px;
}
.nav .writeButton{
    position: relative;
    top: -25px;
    margin-left: 120px;
    height: 25px;
    width: 120px;
    padding-top: 3px;
    color:white;
    border-radius: 5px;
    background-color: #0066B3;
    cursor: pointer;
}
.nav .searchBar{
    position: relative;
    left:900px;
    margin-top: 20px;
    margin-right: 130px;
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: space-between;
}
.searchBar input{
    font-family: 'SuseongDotum', Helvetica, Arial, sans-serif;
    margin-top: 20px;
    border: none;
    border-bottom: 3px solid black;
    width: 200px;
    font-size: 20px;
    height: 30px;
}
.searchBar input:focus{
    outline:none;
}
.searchBar .searchButton{
    height: 25px;
    width: 120px;
    padding-top: 3px;
    margin-top: 25px;
    color:white;
    border-radius: 5px;
    background-color: #0066B3;
    cursor: pointer;
}
.board{
    padding-top: 50px;
    padding-bottom: 50px;
}
.col{
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 30px;
}
.card{
    height: 220px;
    width: 500px;
    border: solid 3px black;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 10px 7px grey;
}
.card:hover{
    background-color: #eee;
    cursor:pointer;
}
img{
    margin-top: 7px;
    margin-left: 7px;
    height: 200px;
    width: 200px;
    border: 2px solid #ddd;
}
.smallBox{
    margin-top: 10px;
    margin-right: 7px;
    height: 200px;
    width: 270px;
    font-size: 20px;
}
.smallBox .title{
    margin-top: 20px;
    margin-bottom: 10px;
}
.card.right{
    margin-right: 100px;
}
.card.left{
    margin-left: 100px;
}
.index{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100px;
    margin: 0 auto;
    margin-bottom: 30px;
}
.numButton{
    width:30px;
    height:25px;
    padding-top: 5px;
    cursor: pointer;;
}

.numButton:hover{
    background-color: #ddd;
}
.select{
    background-color: #0066B3;
    color: white;
    cursor: default;
}
.select:hover{
    background-color: #0066B3;
}
</style>
