<template>
  <div id="Login">
    <div class="loginWrapper">
      <el-form @submit.native.prevent="login">
        <div class="userInfo">
          <span>用户名</span>
          <el-input class="input" v-model="username" type="text" name="username"></el-input>
          <span>密码</span>
          <el-input class="input" v-model="password" type="password" name="password"></el-input>
        </div>
        <div class="submitWrapper">
          <el-input class="submit" type="submit" value="登录"></el-input>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login(){
        this.$router.push({name: 'Home'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  #Login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eff3f6;
    .loginWrapper {
      width: 335px;
      height: 260px;
      box-shadow: 0 0 5px #ccc;
      background: #fefefe;
      .userInfo{
        display: flex;
        justify-content: start;
        flex-direction: column;
        padding-left: 30px;
        height: 185px;
        .input{
          width: 260px;
        }
        >span{
          font-size: 14px;
          color: #666;
          display: inline-block;
          vertical-align: top;
          line-height: 43px;
        }
      }
      .submitWrapper{
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eff4f6;
        .submit{
        width: 100px;
        }
      }
    }
  }
</style>
