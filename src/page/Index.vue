<template>
  <div class="index">
     <section>
        <div>
          <div>
            <Banner/>
          </div>
        </div>
        <div>
           <img src="static/img/bg_shujutu.png">
          <div>
            <p>当前资产</p>
            <p>2.324 BTC</p>
            <p>~123456.78 CNY</p>
            <p>今日盈亏</p>
            <p>+1.28 BTC <span class="triangle-up">+52.1%</span></p>
          </div>
        </div>
     </section>
    <section>
       <ul>
         <li v-for="item in recommend" :key="item.id" v-on:click="toDetail()">
           <p :class="item.quotes.USD['percent_change_24h']>0?'raise':'fail'">
             {{item.quotes.USD["percent_change_24h"]+"%"}}
           </p>
           <p>{{item["symbol"]}}</p>
           <p>${{item.quotes.USD["price"]}}/￥{{item.quotes.CNY["price"]}}</p>
           <p>成交额:{{item["circulating_supply"]}} {{item["symbol"]}}</p>
           <i></i>
         </li>
       </ul>
    </section>

    <section>
      <div class="header">
         <span :class="currBaseCoin==='usdt'?'selected':''" v-on:click="toChange('usdt')">所有</span>
<!--
         <span>自选</span>
-->
        {{currBaseCoin}}
      </div>
      <div>
         <table class="coin_list" border="0" cellpadding="0" cellspacing="0">
            <thead>
               <tr>
                 <td width="15%">名称</td>
                 <td width="16%">流通市值 <div class="triangle"><span></span><span></span></div></td>
                 <td width="16%">流通数量 <div class="triangle"><span></span><span></span></div></td>
                 <td width="16%">成交量(24) <div class="triangle"><span></span><span></span></div></td>
                 <td width="12%">涨幅    <div class="triangle"><span></span><span></span></div></td>
                 <td colspan="3" align="center">价格</td>
               </tr>
            </thead>
            <tbody>
                <tr v-for="item in coinList" :key="item.id"   v-on:click="toDetail()">
                  <td>{{item["symbol"]}}</td>
                  <td>${{item.quotes.USD["market_cap"]}}</td>
                  <td>{{item.quotes.USD["volume_24h"]}}</td>
                  <td>{{item["circulating_supply"]}} {{item["symbol"]}}</td>
                  <td :class="item.quotes.USD['percent_change_24h']>0?'raise':'fail'">
                    {{item.quotes.USD["percent_change_24h"]>0?'+'+item.quotes.USD["percent_change_24h"]+"%":item.quotes.USD["percent_change_24h"] +"%"}}
                  </td>
                  <td><div>0.0000033599</div><div>+0.25%</div></td>
                  <td><div>0.0000033599</div><div>+0.25%</div></td>
                  <td><div>0.0000033599</div><div>+0.25%</div></td>
                </tr>
            </tbody>
         </table>
      </div>

    </section>
  </div>
</template>

<script>
import Tool from '../utils/Tool'
import * as api from '../service/getData'
import Banner from '../plugins/banner/Banner'
export default {
  name: 'Index',
  components: {
    Banner
  },
  data () {
    return {
      coinList: [],
      recommend: [],
      currBaseCoin: 'usdt'
    }
  },
  created () {
    this.initDate()
    window.scrollTo(0, 0)
  },
  mounted () {
  },
  methods: {
    toDetail () {
      this.$router.push('coinToCoin')
    },
    async initDate () {
      let data = await api.getCoinList()
      data = data.data
      var coinList = []
      let recommend = []
      let num = 0
      for (let item in data) {
        num++
        if (num <= 5) {
          recommend.push(data[item])
        } else {
          coinList.push(data[item])
        }
      }
      this.coinList = coinList
      this.recommend = recommend
    },
    toChange (str) {
      this.currBaseCoin = str
    },
    filter (index) {
      return index > 5
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./index";
</style>
