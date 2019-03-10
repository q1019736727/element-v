<template>
  <div id="house">
    <table>
      <tr>
        <th v-for="head in tableDta">{{head.title}}</th>
      </tr>
      <tr v-for="data in tableDta">
        <td v-for="item in data.data">
          {{item}}
        </td>
      </tr>
    </table>
    <page></page>
  </div>
</template>

<script>
  import Page from '../home/Pageination'
  export default {
    name: "house",
    data(){
      return{
        tableDta:[
          {title:'公司',data:['成都合达联行合达物业服务有限公司','花语岸项目','9-1-5-502','李享','15886432554','待处理','2019-03-08 10:33:23']},
          {title:'项目',data:['贵阳和沐物业股份有限公司','置信•国际社区','9-1-5-502','李享','15886432554','待处理','2019-03-08 10:33:23']},
          {title:'房号',data:['成都合达联行物业服务有限公司巴中分公司','645项目','15-2-2-4','李可可','15886432554','待处理','2019-03-08 10:33:23']},
          {title:'联系人',data:['成都合达联行物业服务有限公司巴中分公司','逸景苑','15-2-2-4','李享','15886432554','待处理','2019-03-08 10:33:23']},
          {title:'电话',data:['成都合智商务服务有限公司彭州分公司','置信•国际社区','11-2-2-202','李可可','15886432554','待处理','2019-03-08 10:33:23']},
          {title:'状态',data:['成都合达联行合达物业服务有限公司','麓湖宫','16-1-4-2','李享','15886432554','待处理','2019-03-08 10:33:23']},
          {title:'报修时间',data:['成都合智商务服务有限公司彭州分公司','逸景苑','16-1-4-2','李可可','15886432554','待处理','2019-03-08 10:33:23']},
        ]
      }
    },
    mounted(){

    },
    components:{
      Page
    }
  }
</script>

<style lang="scss" scoped>
  #house {
    padding-left: 10px;
    padding-top: 10px;
    table{
      min-width: 900px;
      border-collapse:collapse;//合并空隙
      tr{
        font-size: 14px;
        color: #999999;
        &:nth-child(even){
          background: #eee;
        }
        >th{
          border: 1px solid #ccc;
          color: black;
          line-height: 60px;
        }
        >td{
          border: 1px solid #ccc;
          text-align: center;
          line-height: 25px;
          padding: 10px 15px;
          &:nth-child(1){
            max-width: 150px;
          }
        }
      }
    }

  }
</style>
