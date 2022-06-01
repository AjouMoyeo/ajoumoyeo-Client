<template>
  <div class="home">
    <alarm/>
    <topBar/>
    <div v-if="this.$store.state.CurrentPage == 'Board'">
      <Board/>
    </div>
    <div v-if="this.$store.state.CurrentPage == 'Write'">
      <Write/>
    </div>
    <div v-if="this.$store.state.CurrentPage == 'Content'">
      <Content/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Alarm from '@/components/Alarm.vue'
import TopBar from '@/components/TopBar.vue'
import Board from '@/components/Board.vue'
import Write from '@/components/Write.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'HomeView',
  components: {
    TopBar,
    Board,
    Write,
    Content,
    Alarm
  },
  created(){
    this.$store.state.sid = localStorage.getItem('sid') || ""
    this.$store.state.token = localStorage.getItem('token') || "";
    this.$store.state.nickname = localStorage.getItem('nickname') || ""
  }
}
</script>
<style scoped>
.home{
  background-color: white;
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  overflow: scroll;
}
</style>