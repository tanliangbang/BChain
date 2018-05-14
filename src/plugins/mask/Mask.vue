<template>
  <div >
     <div class="mask" v-if="isShow"></div>
  </div>
</template>

<script>
export default {
  name: 'Prompt',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showMask () {
      this.isShow = true
    },
    closeMask () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
  .mask{
    width:100%;
    height:100%;
    position:absolute;
    background:#273c6c;
    top:0px;
    left:0px;
    opacity:0.8;
  }
  .maskContent{
    width:300px;
    height:300px;
    position:absolute;
    z-index:5;
    top:0px;
    background:#fff;
  }
</style>
