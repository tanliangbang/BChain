<template>
  <div class="userCenter">
      <section>
        <div class="nav">
          <a to="legalTender" class="selected">账号安全</a>
          <a to="coinToCoin" class="unselect">身份认证</a>
        </div>
        <div class="userInfo">
           <div class="nomal">
             <span>邮箱验证:<i>648103576@qq.com</i></span>
             <span>设置</span>
           </div>
          <div class="nomal">
            <span>手机号码:<i>18721675880</i></span>
            <span><i class="grayColor">暂时无法修改</i></span>
          </div>
          <div class="nomal">
            <span>登入密码:<i>********</i></span>
            <span>修改</span>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../style/common";
.userCenter{
  margin:20px;
  background:@bg_color;
  section{
    overflow:hidden;
    max-width:1200px;
    margin:0 auto;
  }
}
.nav{
  width: 369px;
  height: 50px;
  margin:90px auto 48px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap-reverse;
  a{
    flex: 1;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color:#a8c1ff;
  }
  a:nth-child(1){
    border-bottom-left-radius: 8px;
    -webkit-border-top-left-radius: 8px;
  }
  a:nth-child(2){
    border-bottom-right-radius: 8px;
    -webkit-border-top-right-radius: 8px;
  }
  .unselect{
    border:1px solid #4177fc;
  }
  .selected{
    color:#fff;
    background:#4177fc;
  }
}
  .nomal{
    border-bottom: solid 1px #314b79;
    margin-top:15px;
    padding-left:30px;
    >span:nth-child(1) {
      font-size: 17px;
      height: 56px;
      line-height: 56px;
      color: #a9c2fd;
    }
    >span:nth-child(2){
      color: #39f1ff;
      font-size:16px;
      margin-right:25px;
      line-height:56px;
      float:right;
    }
    .grayColor{
      color: #5a78bf;
    }
  }
</style>
