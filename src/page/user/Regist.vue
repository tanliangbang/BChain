<template>
  <section class="regist">
      <div>
           <p>注册一账通</p>
           <div class="nomalInput">
             <input placeholder="输入手机号码" type="text"/>
             <span>手机号码错误</span>
           </div>
           <div class="code">
             <input type="text" placeholder="输入验证码"/>
             <span>获取验证码</span>
           </div>
           <div class="nomalInput">
             <input placeholder="输入密码" type="text"/>
             <span>手机号码错误</span>
           </div>
           <div class="nomalInput">
             <input placeholder="确认密码" type="text"/>
             <span>手机号码错误</span>
           </div>
           <div class="nomalInput">
             <input placeholder="推荐人" type="text"/>
           </div>
           <div class="button">
             <a>下一步</a>
           </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Regist',
  components: {
  },
  data () {
    return {
      login: true
    }
  },
  created () {
    window.scrollTo(0, 0)
    console.log(this.$route.name)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../style/common';
  @import './index';
  .regist{
    >div{
      padding-top:110px;
      p{
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        margin:0 0 38px 0;
      }
    }
  }
  .code{
    width: 398px;
    height: 56px;
    margin:0 auto 18px;
    position:relative;
    >input{
      width: 244px;
      height: 56px;
      background-color: #273c6e;
      border-radius: 8px;
      padding-left:20px;
      border: solid 2px #304a87;
    }
    span{
      width:143px;
      height: 56px;
      margin-left:6px;
      color:#fff;
      display:inline-block;
      border-radius: 8px;
      line-height: 56px;
      background:#446bcd;
      text-align: center;
    }
  }
</style>
