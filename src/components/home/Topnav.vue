<template>
  <div class="topNav">
    <span>后台管理系统</span>
    <div class="userInfo">
      <span>欢迎你 {{managerName}}</span>
      &emsp;<a @click="outLogin">退出</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Topnav",
    data(){
      return{
        managerName: this.$store.state.binding.userInfo.username,
      }
    },
    methods:{
      outLogin(){
        this.$router.push({name:'Login'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .topNav{
    height: 60px;
    border-bottom: 1px solid #ddd;
    position: relative;
    >span{
      display: inline-block;
      line-height: 60px;
      font-size: 18px;
      font-weight: 700;
      margin-left: 50px;
    }
    .userInfo{
      position: absolute;
      right: 50px;
      top: 0;
      height: 100%;
      span{
        font-size: 13px;
        display: inline-block;
        vertical-align: center;
        line-height: 60px;
      }
      a{
        font-size: 13px;
        color: #46a1ff;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
</style>
