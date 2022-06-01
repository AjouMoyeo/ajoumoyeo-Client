<template>
  <div v-if="this.visiable" class="alarm">
        <div class="title">경고</div>
        <div class="content">{{this.$store.state.alarmMessage}}</div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Alarm',
  data() {
      return { 
        visiable: false
      }
  },
  created(){
  },
  methods: {
  },
  computed: {
      message(){
          return this.$store.state.alarmMessage
      }
  },
  watch: {
      message:{
          handler(newVal, oldVal){
              if(newVal != ""){
                this.visiable = true;
                setTimeout(()=>{this.visiable = false;this.$store.state.alarmMessage = ""}, 1000)
              }
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .alarm{
        position: absolute;
        z-index: 100;
        top: 40%;
        left: 20%;
        border: 5px solid black;
        border-radius: 5px;
        height: 20%;
        width: 60%;
        background-color: white;
    }
    .title{
        font-size: 35px;
        margin-top: 10px;
    }
    .content{
        font-size: 20px;
        margin-top: 50px;
    }
</style>
