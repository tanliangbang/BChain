<template>
  <div class="userCenter">
      <section>
        <div class="nav">
          <a v-on:click="change('userInfo')" :class="nav==='userInfo'?'selected':'unselect'">账号安全</a>
          <a v-on:click="change('auther')" :class="nav==='auther'?'selected':'unselect'">身份认证</a>
        </div>
        <div v-if="nav==='userInfo'" class="userInfo">
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

          <div class="login-history">
            <div class="title">登入历史</div>
            <table>
              <tr><td width="25%">时间</td><td width="25%">登入方式</td><td width="25%">IP</td><td width="25%">状态</td></tr>
              <tr><td>2018-01-01 11:11:11</td><td>Web</td><td>IP:258.25.22.34</td><td>成功</td></tr>
              <tr><td>2018-01-01 11:11:11</td><td>Web</td><td>IP:258.25.22.34</td><td>成功</td></tr>
              <tr><td>2018-01-01 11:11:11</td><td>Web</td><td>IP:258.25.22.34</td><td>成功</td></tr>
              <tr><td>2018-01-01 11:11:11</td><td>Web</td><td>IP:258.25.22.34</td><td>成功</td></tr>
              <tr><td>2018-01-01 11:11:11</td><td>Web</td><td>IP:258.25.22.34</td><td>成功</td></tr>
              <tr><td>2018-01-01 11:11:11</td><td>Web</td><td>IP:258.25.22.34</td><td>成功</td></tr>
            </table>
            <div class="page">
              <span>上一页</span> <span>返回</span> <span>下一页</span>
            </div>
          </div>
        </div>

        <div v-if="nav==='auther'" class="auther">
          <div class="auther-nav">
            <span v-on:click="changeStep(1)" :class="step===1?'selected':''">一级认证</span>
            <span v-on:click="changeStep(2)" :class="step===2?'selected':''">二级认证</span>
          </div>
          <div v-if="step===1" class="nomal-auther">
             <div>
                <span>国籍</span>
                <span>中国</span>
             </div>
            <div>
              <span>姓名</span>
              <span>刘德</span>
            </div>
            <div>
              <span>省份中号码</span>
              <span>456556589969852235</span>
            </div>

             <a class="button">下 一 步</a>
          </div>

          <div v-if="step===2" class="second-auther">
              <div class="upload-div">
                <div>上传身份证正面</div>
                <div>
                  <div></div>
                </div>
                <div>
                  <img src="../../../static/img/sfz.png">
                  <p>示例</p>
                  <p>支持jpg,png格式,单位文件不超过3M</p>
                </div>
              </div>

            <div class="upload-div">
              <div>上传身份证正面</div>
              <div>
                <div></div>
              </div>
              <div>
                <img src="../../../static/img/sfz.png">
                <p>示例</p>
                <p>支持jpg,png格式,单位文件不超过3M</p>
              </div>
            </div>

            <div class="upload-div">
              <div>上传身份证正面</div>
              <div>
                <div></div>
              </div>
              <div>
                <img src="../../../static/img/sfz.png">
                <p>示例</p>
                <p>支持jpg,png格式,单位文件不超过3M</p>
              </div>
            </div>
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
      nav: 'auther',
      step: 2
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  methods: {
    change (str) {
      this.nav = str
    },
    changeStep (num) {
      this.step = num
    }
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
  .login-history{
    margin-top:272px;
    .title{
      width: 185px;
      height: 50px;
      background-color: #4177fc;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      color:#fff;
      text-align: center;
      font-size: 18px;
      line-height: 50px;
    }
    table {
      margin-top:25px;
      width:100%;
      text-align: center;
      color:#fff;
      line-height:50px;
      background:#284585;
      td{
        border-bottom:1px solid @bg_color;
      }
      tr:last-child{
        td{
          border-bottom:none;
        }
      }
    }
  }
  .page{
    margin:30px 0px;
    text-align: center;
    color:#fff;
    >span{
      margin-right:30px;
    }
  }

  .auther-nav{
    width: 100%;
    background-color: #273c6e;
    color:#fff;
    height:56px;
    border-bottom:1px solid #4177fc;
    margin-bottom:20px;
    >span{
      display:inline-block;
      padding:0px 40px;
      margin-right:30px;
      position:relative;
      line-height: 56px;
    }
    .selected::after{
      content:' ';
      position:absolute;
      height: 5px;
      width:100%;
      left:0px;
      bottom:-2px;
      z-index:2;
      background-image: linear-gradient(176deg, #245bfc 0%, #00a7ff 100%);
    }
  }
  .nomal-auther{
    >div{
      width: 100%;
      height: 56px;
      border-bottom:1px solid #314b79;
      display: flex;
      flex-wrap: wrap-reverse;
      margin-top:14px;
      >span{
        flex:1;
        padding-left:30px;
        line-height:56px;
        color: #a9c2fd;
      }
    }
    .next{
      text-align: center;
      margin-top:172px;
      margin-bottom:30px;
    }
    .button{
      width: 345px;
      height: 56px;
      margin:172px auto 56px;
      display:block;
      text-align: center;
      cursor: pointer;
      background-color: #4177fc;
      border-radius: 8px;
      color:#fff;
      font-size: 17px;
      line-height:56px;
    }
  }
  .upload-div{
    color:#fff;
    border-bottom:1px solid #314b79;
    >div{
      height:262px;
      float:left;
      text-align: center;
    }
    >div:nth-child(1) {
      width:30%;
      line-height:262px;
      color: #a9c2fd;
    }
    >div:nth-child(2){
      width:40%;
      >div{
        width: 320px;
        height: 195px;
        background-color: #284585;
        border-radius: 4px;
        opacity: 0.6;
        margin-top:29px;
      }
    }
    >div:nth-child(3){
      width:30%;
      >img{
        margin-top:49px;
      }
      >p:nth-child(2) {
        font-size: 14px;
        text-align: center;
      }
      >p:nth-child(3) {
        font-size: 12px;
        margin-top:5px;
        text-align: center;
      }
    }
  }
  .upload-div::after{
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
  }
.upload-div:last-child{
  border-bottom:none;
}
</style>
