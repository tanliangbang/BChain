<template>
  <div class="coinToCoin">
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

          <div id="tv_chart_container"></div>

          <div class="buy-input-list">
             <div>
                <div class="my-info">
                   <div>
                      <span>货币资产</span>
                      <span>总计:1234.565BTC</span>
                   </div>
                   <div>
                     <span>BTC 可用80.28</span>
                     <span>BTC 可用80.28</span>
                   </div>
                   <div>
                     <a>充值BTC</a>
                     <a>充值BTC</a>
                   </div>
                </div>
             </div>
             <div>

             </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {datafeed} from '../../../static/charting_library/datafeeds/myudf/datafeed'
let  TradingView = require('../../../static/charting_library/charting_library/charting_library.min.js')
let Datafeeds = null
export default {
  name: 'CoinToCoin',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    let symbol = 'btcusdt'
    var widget = new TradingView.widget({
      fullscreen: true,
      symbol: symbol,
      interval: '1',
      timezone:'Asia/Shanghai',
      toolbar_bg: '#273c6c',
      allow_symbol_change: true,
      container_id: "tv_chart_container",
      datafeed: datafeed,
      library_path: "../../../static/charting_library/charting_library/",
      locale: "zh",
      custom_css_url:"css/charting.css",
      drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
      disabled_features: ["use_localstorage_for_settings", "volume_force_overlay"],
      fullscreen:false,
      debug:true,
      drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
      disabled_features: ["use_localstorage_for_settings", "header_chart_type","header_symbol_search", "timeframes_toolbar",
        "volume_force_overlay", "header_saveload", "header_resolutions", "header_compare", "header_undo_redo",
        "header_screenshot", "display_market_status","adaptive_logo","dont_show_boolean_study_arguments"],
      overrides: { //k线的颜色
        "symbolWatermarkProperties.transparency": 90,
        "scalesProperties.textColor": "#ddd",
        "paneProperties.vertGridProperties.color": "#273c6c",
        "paneProperties.horzGridProperties.color": "#273c6c",
        "paneProperties.crossHairProperties.color": "#fafafa",
        "volumePaneSize": "small",
        "paneProperties.legendProperties.showLegend": false, //折叠信息
        "paneProperties.background": '#273c6c',
        "mainSeriesProperties.candleStyle": {
          upColor: "#589065",
          downColor: "#ae4e54",
          drawBorder: true,
          borderColor: "#ae4e54",
          borderUpColor: "#589065",
          borderDownColor: "#ae4e54",
          drawWick: true,
          wickColor: "#737375",
          wickUpColor: "#589065",
          wickDownColor: "#ae4e54",
          barColorsOnPrevClose: !1,
        }
      },
      width:1500,
      height:500
    });

    widget.onChartReady(function() {
      widget.chart().createStudy("Moving Average", false, false, [5], null, { "plot.color": "#9660c4" });
      widget.chart().createStudy("Moving Average", false, false, [10], null, { "plot.color": "#84aad5" });
      widget.chart().createStudy("Moving Average", false, false, [20], null, { "plot.color": "#55b263" });
      var c = widget.chart().getAllStudies()
      widget.chart().executeActionById("drawingToolbarAction");
      widget.chart().executeActionById("studyHide");
      var timeList = ['1', '5', '15', '30', '60', '1D', '1W', '1M']
      let buttonArr = []
      let fx = widget.createButton().attr('title', "分时").append('<span>'+ "分时" +'</span>')
      fx.parent().addClass("dataSelect")
      buttonArr.push(fx)
      fx.on('click',function(){
        for (let i = 0; i < buttonArr.length; i++) {
          buttonArr[i].removeClass('selected')
        }
        fx.addClass('selected')
        widget.chart().setChartType(3)
      })
      timeList.forEach(function(v){
        let button = widget.createButton();
        button.attr('title', v)
        if (v === '1') {
          button.addClass('selected')
        }
        button.parent().addClass("dataSelect")
        button.append('<span>'+ v +'min</span>')
        buttonArr.push(button)
        button.on('click', function(a){
          localStorage.setItem('klineTime', v);
          widget.chart().setChartType(1)
          for (let i = 0; i < buttonArr.length; i++) {
            buttonArr[i].removeClass('selected')
          }
          button.addClass('selected')
          widget.chart().setResolution(v, function(){

          })
        })
      })
    });


  },
  methods: {
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
    height:1000px;
    position:relative;
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
  >div:nth-child(1) {
    float:left;
    width:54%;
    .my-info{

    }
  }
  >div:nth-child(1) {
    float:left;
    width:46%;
  }
}

</style>
