<template>
  <section class="login">
      <div>
            <p>注册一账通</p>
            <div class="nomalInput">
              <input placeholder="输入手机号码" type="text"/>
              <i class="error_promit">手机号码错误</i>
            </div>
            <div class="nomalInput">
              <input placeholder="输入密码" :type="isShowpass?'password':'text'"/>
              <i v-on:click="showpass()" class="showpass"></i>
            </div>
            <div class="button">
              <a>登入</a>
            </div>
            <div class="forgetPassword">
               <router-link to="forget">忘记密码</router-link>
            </div>
          <div class="registLink">
            <a>注册一帐通</a>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      isShowpass: true
    }
  },
  created () {
    window.scrollTo(0, 0)
    console.log(this.$route.name)
  },
  methods: {
    showpass () {
      this.isShowpass = !this.isShowpass
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../style/common';
  @import './index';
  .login{
      >div{
        padding-top:106px;
        p{
          text-align: center;
          font-size: 20px;
          color: #ffffff;
          margin:0 0 38px 0;
        }
        .nomalInput{
          margin-bottom:24px;
        }
        .button{
          margin-top:60px;
        }
        .forgetPassword{
          text-align: center;
          margin-top:19px;
          a{
            font-size:14px;
            color: #0088ff;
          }
          a:hover{
            color: #269aff;
          }
        }
        .registLink{
          margin-top:40px;
          text-align: center;
          a{
            font-size:18px;
            color:#fff;
          }
        }
      }
  }
</style>
