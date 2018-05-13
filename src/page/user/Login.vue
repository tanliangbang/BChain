<template>
  <section class="login">
      <div v-bind:style="{minHeight: this.$store.getters.getMinHeight}">
           <form class="login_form">
             <p>注册一账通</p>
             <div class="nomalInput">
               <input v-model="loginForm.phone" placeholder="输入手机号码"/>
               <!--
                             <i class="error_promit">手机号码错误</i>
               -->
             </div>
             <div class="nomalInput">
               <input v-model="loginForm.password" placeholder="输入密码" :type="isShowpass?'text':'password'"/>
               <i v-on:click="showpass()" :class="isShowpass?'showpass':'hidepass'"></i>
             </div>
             <div class="login_button">
               <a class="no_button" v-on:click="login">登入</a>
             </div>
             <div class="forgetPassword">
               <router-link to="foundPassword">忘记密码</router-link>
             </div>
             <div class="registLink">
               <a>注册一帐通</a>
             </div>
           </form>
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
      isShowpass: false,
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: {
          message: '',
          class: 'none'
        }
      }
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  methods: {
    showpass () {
      this.isShowpass = !this.isShowpass
    },
    login () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../style/common';
  @import './index';
  .login_form{
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
        .login_button{
          margin-top:60px;
          text-align: center;
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
          margin-bottom:38px;
          a{
            font-size:18px;
            color:#fff;
          }
      }
  }
</style>
