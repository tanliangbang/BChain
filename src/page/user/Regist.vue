<template>
  <section class="regist">
      <div v-bind:style="{minHeight: this.$store.getters.getMinHeight}">
          <form class="step1" v-if="step === 1" v-on:keyup="onPageDown">
             <p>注册一账通</p>
             <div class="nomalInput">
               <input placeholder="输入手机号码"  v-model="registForm.phone" v-on:focus="showDel('phone')" v-on:blur="checkPhone()" type="text"/>
               <i :class="rules.phone.class" v-on:click="delContent('phone')" >{{rules.phone.message}}</i>
             </div>
             <div class="code">
               <input type="text" v-on:focus="showDel('code')" v-on:blur="checkCode()" v-model="registForm.code" placeholder="输入验证码"/>
               <i :class="rules.code.class"  v-on:click="delContent('code')">{{rules.code.message}}</i>
               <span v-on:click="getCode()" ref="send">获取验证码</span>
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
             <div v-if="!ispass" class="rbutton">
               <a class="no_button">下一步</a>
             </div>
            <div v-if="ispass" class="rbutton">
              <a v-on:click="submit"  class="ok_button">下一步</a>
            </div>
          </form>
          <form class="step2" v-if="step === 2" v-on:keyup="emailPassDown">
             <p>
               恭喜,注册成功~ <br/>
               恭交易操作需要完成邮箱验证,请完成邮箱验证
             </p>
            <div class="nomalInput">
              <input placeholder="请输入邮箱"  v-model="email" v-on:focus="showDel('email')" v-on:blur="checkEmail()" type="text"/>
              <i :class="rules.email.class" v-on:click="delEmail()" >{{rules.email.message}}</i>
            </div>
            <div v-if="!emailpass" class="sbutton">
               <a class="no_button">发送邮箱</a>
            </div>
            <div v-if="emailpass" class="sbutton">
              <a class="ok_button" v-on:click="sendEmail">发送邮箱</a>
            </div>
            <div class="login_button">
              <router-link class="ok_button" to="login">登入比链</router-link>
            </div>
          </form>
          <form class="step3" v-if="step === 3">
            <p>
              恭喜,注册成功~ <br/>
              恭交易操作需要完成邮箱验证,请完成邮箱验证
            </p>
            <p>已发送 648103576@qq.com </p>
            <div  class="to_button">
              <a href="mailto:648103576@qq.com" class="ok_button">登入邮箱</a>
            </div>
            <div class="login_button">
              <router-link class="ok_button" to="login">登入比链</router-link>
            </div>
          </form>
      </div>
  </section>
</template>

<script>
import Tool from '../../utils/Tool'
import '../../../static/greetest/gt'
import * as api from '../../service/getData'

export default {
  name: 'Regist',
  components: {
  },
  data () {
    return {
      isShowpass: false,
      ispass: false,
      step: 1,
      emailpass: false,
      email: '',
      isSendCode: false,
      captchaObj: null,
      tokenId: null,
      phone: null,
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
        },
        email: {
          message: '',
          class: ''
        }
      }
    }
  },
  created () {
    window.scrollTo(0, 0)
    this.initDate()
  },
  methods: {
    async initDate () {
      let data = await api.getGreetest()
      let that = this
      window.initGeetest({
        // 以下配置参数来自服务端 SDK
        gt: data.gt,
        challenge: data.challenge,
        offline: !data.success,
        new_captcha: data.new_captcha,
        product: 'bind'
      }, function (captchaObj) {
        that.captchaObj = captchaObj
        captchaObj.onSuccess(function () {
          let result = captchaObj.getValidate()
          result.mobile = that.registForm.phone
          that.phone = that.registForm.phone
          result.gee_token = data.gee_token
          api.sendSMS(result).then(function (res) {
            if (!res.tokenId) {
              return
            }
            that.tokenId = res.tokenId
            that.isSendCode = true
            let currNode = that.$refs.send
            let number = 60
            currNode.innerHTML = '发送(' + number + 's)'
            let cuntDown = setInterval(function () {
              if (number <= 0) {
                currNode.innerHTML = '获取验证码'
                clearInterval(cuntDown)
              } else {
                number = --number
                currNode.innerHTML = '已发送(' + number + 's)'
              }
            }, 1000)
          })
        })
      })
    },
    showDel (field) {
      this.rules[field].class = 'del'
      this.rules[field].message = ''
    },
    delContent (field) {
      this.registForm[field] = ''
    },
    delEmail () {
      this.email = ''
    },
    checkPhone (bool) {
      if (this.registForm.phone === '') {
        if (!bool) {
          this.rules.phone.class = 'del'
          this.rules.phone.message = '请输入手机号码'
        }
        return false
      }
      if (!Tool.isPoneAvailable(this.registForm.phone)) {
        if (!bool) {
          this.rules.phone.class = 'del'
          this.rules.phone.message = '手机号码错误'
        }
        return false
      } else {
        this.rules.phone.class = 'pass'
        this.rules.phone.message = ''
        return true
      }
    },
    checkCode (bool) {
      if (!this.isSendCode) {
        if (!bool) {
          this.rules.code.class = 'del'
          this.rules.code.message = '请获取验证码'
        }
        return false
      }
      if (this.registForm.code === '') {
        if (!bool) {
          this.rules.code.class = 'del'
          this.rules.code.message = '请输入验证码'
        }
        return false
      } else {
        this.rules.code.class = 'pass'
        this.rules.code.message = ''
        return true
      }
    },
    checkPass (bool) {
      let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
      if (this.registForm.password === '') {
        if (!bool) {
          this.rules.password.class = 'del'
          this.rules.password.message = '请输入密码'
        }
        return false
      } else if (this.registForm.password.length < 6) {
        if (!bool) {
          this.rules.password.class = 'del'
          this.rules.password.message = '密码至少6位'
        }
        return false
      } else if (!reg.test(this.registForm.password)) {
        if (!bool) {
          this.rules.password.class = 'del'
          this.rules.password.message = '数字和字母组合'
        }
        return false
      } else {
        this.rules.password.class = 'pass'
        this.rules.password.message = ''
        return true
      }
    },
    checkRePass (bool) {
      if (this.registForm.repassword === '') {
        if (!bool) {
          this.rules.repassword.class = 'del'
          this.rules.repassword.message = '请输入确认密码'
        }
        return false
      } else if (this.registForm.password !== this.registForm.repassword) {
        if (!bool) {
          this.rules.repassword.class = 'del'
          this.rules.repassword.message = '两次密码不一致'
        }
        return false
      } else {
        this.rules.repassword.class = 'pass'
        this.rules.repassword.message = ''
        return true
      }
    },
    checkEmail (bool) {
      if (this.email === '') {
        if (!bool) {
          this.rules.email.class = 'del'
          this.rules.email.message = '请输入邮箱'
        }
        return false
      } else if (!Tool.isEmail(this.email)) {
        if (!bool) {
          this.rules.email.class = 'del'
          this.rules.email.message = '邮箱格式错误'
          return false
        }
      } else {
        this.emailpass = true
        this.rules.email.class = 'pass'
        this.rules.email.message = ''
        return true
      }
    },
    showpass () {
      this.isShowpass = !this.isShowpass
    },
    onPageDown () {
      if (this.checkPhone(true) && this.checkCode(true) && this.checkPass(true) && this.checkRePass(true)) {
        this.ispass = true
      } else {
        this.ispass = false
      }
    },
    emailPassDown () {
      if (this.checkEmail()) {
        this.emailpass = true
      } else {
        this.emailpass = false
      }
    },
    submit () {
      let params = {
        mobile: this.phone,
        tokenId: this.tokenId,
        code: this.registForm.code,
        pass: Tool.md5(this.registForm.password),
        referee: this.registForm.recommed
      }
      let that = this
      api.regist(params).then(function (res) {
        console.log(res)
        that.step = 2
      })
    },
    sendEmail () {
      this.step = 3
    },
    getCode () {
      if (this.checkPhone() && this.$refs.send.innerHTML === '获取验证码') {
        this.captchaObj.verify()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../style/common';
  @import './index';
  .step1{
      padding-top:110px;
      p{
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        margin:0 0 38px 0;
    }
    .rbutton{
      margin-top:38px;
      text-align: center;
      margin-bottom:30px;
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
  .step2, .step3{
    padding-top:167px;
    >p:nth-child(1){
      text-align: center;
      font-size: 20px;
      color:#fff;
      letter-spacing: 0px;
      margin:0 0 50px 0;
    }
    >p:nth-child(2) {
      margin-top:75px;
      text-align: center;
      font-size: 16px;
      color:#fff;
      letter-spacing: 0px;
    }
    .to_button{
      margin-top:15px;
      text-align: center;
    }
    .sbutton{
      margin-top:50px;
      text-align: center;
    }
    .login_button{
      margin-top:18px;
      text-align: center;
    }
  }
</style>
