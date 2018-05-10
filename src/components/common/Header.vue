<template>
  <header>
    <div>
      <dl>
        <img src="../../../static/img/logo.png"/>
      </dl>
      <dl>
        <router-link to="home">行情</router-link>
      </dl>
      <dl>
        <router-link to="change">交易</router-link>
      </dl>
    </div>

    <div>
        中文
    </div>
     <!--<ul>
       <li>分佣推广</li>
       <li>资产管理</li>
       <li>用户昵称</li>
     </ul>-->
    <ul>
      <li> <router-link to="login">登入</router-link></li>
      <li><router-link to="regist">注册</router-link></li>
    </ul>
  </header>

</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../style/common.less";
  header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background: @mainColor;
    color:#fff;
    font-size:18px;
    transition: all 1s ease;
    padding:0px;
    z-index:2;
    min-width:1000px;
    >div:nth-child(1){
      float:left;
      >dl{
        float:left;
        margin-left:20px;
        a{
          padding:0px 30px;
          line-height:57px;
          display:inline-block;
        }
        .router-link-active{
          border-bottom:3px solid #fff;
        }
      }
      >dl:nth-child(1){
        width:124px;
        height:48px;
        margin-left:33px;
        background:url("../../../static/img/logobg.png");
        margin-top:6px;
      }
    }
    >img{
      width:120px;
      height:48px;
      margin-top:6px;
      margin-left:20px;
      margin-right:50px;
      vertical-align: top;
    }
    a{
      color:#fff;
    }
    >span{
      margin:0px;
      padding:0px;
      display:inline-block;
      height:100%;
      width:80px;
      text-align: center;
      cursor: pointer;
      line-height: 60px;
    }
    .selected{
       border-bottom:3px solid #fff;
    }
    ul{
      margin:0px;
      float:right;
      li{
        float:left;
        a{
          display:block;
          padding:0px 20px;
          margin-right:10px;
          text-align: center;
          cursor: pointer;
          line-height: 57px;
        }
        .router-link-active{
          border-bottom:3px solid #fff;
        }
      }
    }
    >div:nth-child(2){
      float:right;
      width:94px;
      text-align: center;
      line-height: 60px;
    }
}
</style>
