<template>
  <div id="app">
   <Header></Header>
    <div class="pageContent" v-bind:style="{ minHeight:minHeight+'px' }">
      <keep-alive exclude="rightList">
          <router-view/>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
export default {
  name: 'App',
  data () {
    return {
      minHeight: '0px'
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
 html,body{
   margin:0px;
   width:100%;
   min-width:1000px;
   min-height:100%;
   position:relative;
/*
   background:linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
*/
   background:#27375d;
 }
 .pageContent{
   padding-top:60px;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
}
</style>
