<template>
    <div>
      <span><i class="el-icon-d-arrow-left"></i></span>
      <span><i class="el-icon-arrow-left"></i></span>
      <button v-for="item in pageNums">{{item}}</button>
      <span><i class="el-icon-arrow-right"></i></span>
      <span><i class="el-icon-d-arrow-right"></i></span>
    </div>
</template>

<script>
    export default {
      name: "Pageination",
      data(){
        return{
          pageNums:[1,2,3,4,5,6,7,8,9,10]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
