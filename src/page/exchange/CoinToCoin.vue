<template>
  <div class="coinToCoin" v-on:click="containerClick">
    <section>

       <div class="coin-nav">
         <span class="selected">自选</span>
         <span>BTC</span>
         <span>ETH</span>
         <span>USDT</span>
       </div>

      <div class="container">

         <div class="coin-list">
           <div class="search">
             <input type="text" placeholder="输入代币吗">
             <button>搜索</button>
           </div>
           <ul>
             <li v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">
               <span>{{item}}</span>
               <span>BTC/USDT</span>
               <span class="raise">-1.03%</span>
             </li>
           </ul>
         </div>

        <div class="coin-detail">
           <div class="coin-header">
             <span>BTC/USDT</span>
             <span class="fail">+1.08%</span>
             <span>8804.25 ~ 540891 CNY</span>
           </div>
          <div class="exchange-list">
              <ul>
                 <li class="selected">
                    <div>火币</div>
                    <div>
                       <p class="raise">+2.19%</p>
                       <p>81254.55</p>
                    </div>
                 </li>
                <li v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">
                  <div>火币</div>
                  <div>
                    <p class="raise">+2.19%</p>
                    <p>81254.55</p>
                  </div>
                </li>
              </ul>
          </div>

          <KeyLine ref="keyLine"/>

          <div class="buy-input-list">
             <div>
                <div class="my-info">
                   <div>
                      <p>货币资产</p>
                      <p>总计:1234.565BTC</p>
                   </div>
                   <div>
                     <p>BTC 可用80.28</p>
                     <p>BTC 可用80.28</p>
                   </div>
                   <div>
                     <p>充值BTC</p>
                     <p>充值BTC</p>
                   </div>
                </div>

                <div>
                  <Entrust/>
                </div>
             </div>

             <div>
               <CurrEntrustList/>
             </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KeyLine from './model/KeyLine'
import CurrEntrustList from './model/CurrEntrustList'
import Entrust from './model/Entrust'
export default {
  name: 'CoinToCoin',
  components: {
    KeyLine,
    CurrEntrustList,
    Entrust
  },
  data () {
    return {
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    containerClick () {
      this.$refs.keyLine.maskShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./index";
.coinToCoin{
  margin:20px;
  .coin-nav{
    height:70px;
    background:@bg_color;
   >span{
     font-size: 18px;
     padding:0px 40px;
     line-height: 70px;
     display:inline-block;
     cursor: pointer;
     color:#fff;
   }
    >span:nth-child(1) {
      padding:0px 80px;
    }
    .selected{
      background:#284585;
    }
  }
  .container{
    margin-top:25px;
    width:100%;
    position:relative;
    min-height:1280px;
    .coin-list{
      width:345px;
      background:@bg_color;
      position:absolute;
      left:0px;
      top:0px;
      height:100%;
      background:@bg_color;
      >ul{
        width:100%;
        height:100%;
        li{
          line-height:52px;
          padding:0px 15px;
          background-image: linear-gradient(0deg, #283b6c 0%, #273965 100%);
          >span:nth-child(2) {
            color:#fff;
          }
          >span:nth-child(3){
            float:right;
          }
        }
      }
    }
    .coin-detail{
      width:100%;
      padding-left:360px;
      .coin-header{
        height:64px;
        width:100%;
        color:#fff;
        line-height: 64px;
        background:@mainColor;
        >span:nth-child(1) {
          font-size: 25px;
          padding-left:38px;
        }
        >span:nth-child(2) {
          margin-left:34px;
          font-size:20px;
        }
        >span:nth-child(3) {
          float:right;
          margin-right:95px;
          font-size:18px;
        }
      }
      .exchange-list{
         width:100%;
         overflow: hidden;
         ul{
           margin:10px 0;
           width:5000px;
           height:120px;
           li{
             float:left;
             width:280px;
             height:100%;
             color:#fff;
             margin-right:10px;
             background:@bg_color;
             border-radius:3px;
             >div:nth-child(1) {
               line-height: 120px;
               padding-left:28px;
             }
             >div:nth-child(2) {
               p:nth-child(1) {
                 margin-top:30px;
                 text-align: right;
                 padding-right:29px;
                 font-size: 25px;
               }
               p:nth-child(2) {
                 padding-right:29px;
                 font-size: 16px;
                 text-align: right;
                 margin-top:6px;
               }
             }
             >div{
               float:left;
               width:50%;
             }
           }
           li:after{
             display:block;
             clear:both;
             content:"";
             visibility:hidden;
             height:0
           }
           .selected{
             background:#284da1;
           }
           li:hover{
             border:2px solid #284da1;
           }
         }
      }
    }
  }
}
.search{
  width: 100%;
  height: 51px;
  background-color: #273c6e;
  border-radius: 8px;
  border: solid 2px #304a87;
  position:relative;
  margin-bottom:10px;
  input{
    width:100%;
    height:100%;
    background-color: #273c6e;
    border:none;
    padding-right:90px;
    font-size: 17px;
    color: #a9c2fd;
    padding-left:25px;
    border-radius: 8px;
  }
  button{
    width: 88px;
    height: 43px;
    background-color: #4177fc;
    border-radius: 5px;
    border:none;
    color:#fff;
    font-size: 17px;
    position:absolute;
    right:2px;
    top:2px;
  }
}

.buy-input-list{
  margin-top:20px;
  >div:nth-child(1) {
    float:left;
    width:54%;
    .my-info{
      height:112px;
      background:@bg_color;
      display: flex;
      flex-wrap: wrap-reverse;
      >div{
        padding-top:26px;
        flex:1;
        color:#fff;
        >p:nth-child(2) {
          margin-top:18px;
        }
      }
      >div:nth-child(1){
        padding-left:38px;
      }
      >div:nth-child(2) {
        p{
          text-align: center;
        }
      }
      >div:nth-child(3) {
        text-align: right;
        padding-right:38px;
      }
    }
  }
  >div:nth-child(2) {
    padding-left:18px;
    float:left;
    width:46%;
    box-sizing: border-box;
  }
}

</style>
