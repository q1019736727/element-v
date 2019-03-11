<template>
  <div id="house">
    <table>
      <tr>
        <th v-for="title in titles">{{title}}</th>
      </tr>
      <tr v-for="data in tableDta">
        <td v-for="(item,index) in data.data">
          {{item}}
        </td>
        <td>
          <button @click="addList">增加</button>
          <button @click="deleteRow">删除</button>
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
    data() {
      return {
        titles: ['公司', '项目', '房号', '联系人', '电话', '状态', '报修时间', '操作'],
        tableDta: this.$store.state.house.tableDta
      }
    },
    mounted() {

    },
    methods: {
      addList(){
        this.$store.dispatch('addListAction',{data:['新加数据哈哈😄','😄😄','16-1-4-2','李可可','15886432554','待处理','2019-03-08 10:33:23']})
      },
      deleteRow(index) {
        this.$confirm(`是否删除该条记录${index}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        }).then(() => {
          this.$store.dispatch('reduceListAction', 1).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          })
        })
      }
    },
    components: {
      Page
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/common/main.scss";

  #house {
    padding-left: 10px;
    padding-top: 10px;
    table {
      min-width: 900px;
      border-collapse: collapse; //合并空隙
      tr {
        font-size: 14px;
        color: #999999;
        &:nth-child(even) {
          background: #eee;
        }
        > th {
          border: 1px solid #ccc;
          color: black;
          line-height: 60px;
        }
        > td {
          border: 1px solid #ccc;
          text-align: center;
          line-height: 25px;
          padding: 10px 15px;
          &:nth-child(1) {
            max-width: 150px;
          }
          &:last-child {
            min-width: 100px;
          }
          > button {
            padding: 5px 10px;
            color: $main_color;
            background: white;
            border: 1px solid #ccc;
            &:last-child {
              color: red;
            }
            &:hover{
              cursor: pointer;
            }
            &:focus {
              outline: none;
            }
          }
        }
      }
    }

  }
</style>
