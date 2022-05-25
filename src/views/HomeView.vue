<template>
  <div class="home">
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
    Content
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