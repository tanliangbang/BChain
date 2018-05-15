<template>
  <div class="legalTender">
     <section>
        <nav class="exchangeNav">
          <a class="selected">法币交易</a>
          <a class="unselect">货币交易</a>
        </nav>

       <header>
          <div>
             <div>买</div>
             <div>
                <span class="selected">BTC</span>
                <span>ETH</span>
                <span>USDT</span>
             </div>
          </div>
           <div>
             <div>卖</div>
             <div>
               <span>BTC</span>
               <span>ETH</span>
               <span>USDT</span>
             </div>
           </div>
           <div>
             <div>
                 <p>支持币种</p>
                 <span>全部</span>
               </div>
               <div>
                 <p>付款方式</p>
                 <span>全部</span>
               </div>
               <div>
                 <p>交易场所</p>
                 <span>全部</span>
               </div>
           </div>
       </header>
       <div class="exList">
         <table border="0" cellpadding="0" cellspacing="0">
           <tr>
             <th>商家</th>
             <th>数量</th>
             <th>限额</th>
             <th>单价</th>
             <th>支付方式</th>
             <th>交易所</th>
             <th>操作</th>
           </tr>
           <tr v-for="item in [0,1,2,3,4,5,6,7,8,9]" :key="item">
             <td>{{item}}老吴</td>
             <td>1.3425 BTC</td>
             <td>1000-5000</td>
             <td>$50998.89</td>
             <td>支付宝</td>
             <td>火币网</td>
             <td>去交易</td>
           </tr>
         </table>
         <div>
            <span>上一页</span>
            <span>06/10</span>
            <span>下一页</span>
         </div>
       </div>

       <div class="myOrder">
         <header>
           <span>我的订单</span>
           <div class="search">
             <input type="text" placeholder="订单号/日期/状态/对手方">
             <button>搜索</button>
           </div>
         </header>

         <table border="0" cellpadding="0" cellspacing="0">
           <tr>
             <th width="12.5%">订单号</th>
             <th width="12.5%">方向</th>
             <th width="12.5%">币种</th>
             <th width="12.5%">交易数量</th>
             <th width="12.5%">总价</th>
             <th width="12.5%">时间</th>
             <th width="12.5%">状态</th>
             <th width="12.5%">对手方</th>
           </tr>
           <tr v-for="item in [0,1,2,3,4,5,6,7,8,9]" :key="item">
             <td>{{item}}HB20214</td>
             <td>买入</td>
             <td>BTC</td>
             <td>2.234234</td>
             <td>1212312 CNY</td>
             <td>2018/04/19 12:21:37</td>
             <td>已付款</td>
             <td>风清扬</td>
           </tr>
         </table>
       </div>
     </section>
  </div>
</template>

<script>
export default {
  name: 'LegalTender',
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
@import "./../../style/common";
@import "./index";
</style>
