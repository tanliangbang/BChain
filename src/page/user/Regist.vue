<template>
  <section class="regist">
      <div>
           <p>注册一账通</p>
           <div class="nomalInput">
             <input placeholder="输入手机号码" v-model="registForm.phone" v-on:focus="showDel('phone')" v-on:blur="checkPhone()" type="text"/>
             <i :class="rules.phone.class" v-on:click="delContent('phone')" >{{rules.phone.message}}</i>
           </div>
           <div class="code">
             <input type="text" v-on:focus="showDel('code')" v-on:blur="checkCode()" v-model="registForm.code" placeholder="输入验证码"/>
             <i :class="rules.code.class"  v-on:click="delContent('code')">{{rules.code.message}}</i>
             <span>获取验证码</span>
           </div>
           <div class="nomalInput password">
             <input placeholder="输入密码" v-model="registForm.password" v-on:blur="checkPass()" :type="isShowpass?'text':'password'"/>
             <i :class="rules.password.class"  v-on:click="delContent('password')">{{rules.password.message}}</i>
             <i v-on:click="showpass()" :class="isShowpass?'showpass':'hidepass'"></i>
           </div>
           <div class="nomalInput password">
             <input placeholder="确认密码" v-model="registForm.repassword" v-on:blur="checkRePass()" :type="isShowpass?'text':'password'"/>
             <i :class="rules.repassword.class"  v-on:click="delContent('repassword')">{{rules.repassword.message}}</i>
             <i v-on:click="showpass()" :class="isShowpass?'showpass':'hidepass'"></i>
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
import Tool from '../../utils/Tool'
export default {
  name: 'Regist',
  components: {
  },
  data () {
    return {
      isShowpass: false,
      registForm: {
        phone: '',
        code: '',
        password: '',
        repassword: '',
        recommed: ''
      },
      rules: {
        phone: {
          message: '',
          class: ''
        },
        code: {
          message: '',
          class: ''
        },
        password: {
          message: '',
          class: ''
        },
        repassword: {
          message: '',
          class: ''
        }
      }
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  methods: {
    showDel (field) {
      this.rules[field].class = 'del'
      this.rules[field].message = ''
    },
    delContent (field) {
      this.registForm[field] = ''
    },
    checkPhone () {
      if (this.registForm.phone === '') {
        this.rules.phone.class = 'del'
        this.rules.phone.message = '请输入手机号码'
        return false
      }
      if (!Tool.isPoneAvailable(this.registForm.phone)) {
        this.rules.phone.class = 'del'
        this.rules.phone.message = '手机号码错误'
      } else {
        this.rules.phone.class = 'pass'
        this.rules.phone.message = ''
      }
    },
    checkCode () {
      if (this.registForm.code === '') {
        this.rules.code.class = 'del'
        this.rules.code.message = '请输入验证码'
      } else {
        this.rules.code.class = 'pass'
        this.rules.code.message = ''
      }
    },
    checkPass () {
      let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
      if (this.registForm.password === '') {
        this.rules.password.class = 'del'
        this.rules.password.message = '请输入密码'
      } else if (this.registForm.password.length < 6) {
        this.rules.password.class = 'del'
        this.rules.password.message = '密码至少6位'
      } else if (!reg.test(this.registForm.password)) {
        this.rules.password.class = 'del'
        this.rules.password.message = '数字和字母组合'
      } else {
        this.rules.password.class = 'pass'
        this.rules.password.message = ''
      }
    },
    checkRePass () {
      if (this.registForm.repassword === '') {
        this.rules.repassword.class = 'del'
        this.rules.repassword.message = '请输入确认密码'
      } else if (this.registForm.password !== this.registForm.repassword) {
        this.rules.repassword.class = 'del'
        this.rules.repassword.message = '两次密码不一致'
      } else {
        this.rules.repassword.class = 'pass'
        this.rules.repassword.message = ''
      }
    },
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
  .password{
    i:nth-child(2){
      right:40px;
    }
    i:nth-child(3){
      top:22px;
    }
  }
  .code{
    width: 398px;
    height: 56px;
    margin:0 auto 18px;
    position:relative;
    i{
      position:absolute;
      color:#38f1ff;
      font-size:12px;
      right:175px;
      top:20px;
    }
    .del:after {
      content:" ";
      display:inline-block;
      vertical-align: -3px;
      margin-left:5px;
      width:14px;
      height:14px;
      cursor: pointer;
      background:url("../../../static/img/but_del.png");
      background-size:100% 100%;
    }
    .pass:after{
      content:" ";
      display:inline-block;
      vertical-align: -3px;
      margin-left:5px;
      width:14px;
      height:14px;
      cursor: pointer;
      background:url("../../../static/img/icon_good.png");
      background-size:100% 100%;

    }
    >input{
      width: 244px;
      height: 56px;
      background-color: #273c6e;
      border-radius: 8px;
      padding-left:20px;
      border: solid 2px #304a87;
      color:#fff;
      font-size:16px;
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
      cursor: pointer;
    }
  }
</style>
