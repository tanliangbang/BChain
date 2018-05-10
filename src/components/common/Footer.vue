<template>
  <div class="footer">
     <table>
        <thead>
          <tr>
            <td>我们的服务</td>
            <td>我们的服务</td>
            <td>我们的服务</td>
            <td>我们的服务</td>
            <td>我们的服务</td>
            <td>我们的服务</td>
          </tr>
        </thead>
       <tbody>
         <tr>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
         </tr>
         <tr>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
         </tr>
         <tr>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
         </tr>
         <tr>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
           <td>我们的信息</td>
         </tr>
       </tbody>
     </table>
     <div>Copyright 2018 ShangHai Municipal Educational Examinations Authority All Rights Resered</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../style/common.less";
  .footer{
    width:100%;
    background:@mainColor;
    text-align: center;
    clear:both;
    table{
       width:800px;
       padding:50px 0px;
       color:#fff;
       margin:0px auto;
       thead{
         font-size:14px;
       }
       tbody{
         font-size:12px;
         tr{
           line-height: 20px;
         }
       }
     }
    >div{
      color:#fff;
      padding-bottom:20px;
    }
  }
</style>
