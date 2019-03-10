<template>
  <div onselectstart="return false" id="pageination">
    <span><i class="el-icon-d-arrow-left"></i></span>
    <span @click="preAction"><i class="el-icon-arrow-left"></i></span>
    <button v-for="(item,index) in pageNums"
            @click="clickPage"
            :class="{activity:currentIndex===index}">{{item}}
    </button>
    <span @click="nextAction"><i class="el-icon-arrow-right"></i></span>
    <span><i class="el-icon-d-arrow-right"></i></span>
  </div>
</template>

<script>
  export default {
    name: "Pageination",
    data() {
      return {
        pageNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        currentIndex: 0,
      }
    },
    methods: {
      clickPage(ele) {
        let index = ele.currentTarget.innerHTML - 1
        let arr = this.pageNums
        let value = parseInt(ele.currentTarget.innerHTML)
        if (value > 6) {
          console.log(value)
          console.log(arr.indexOf(value))
        } else {

        }
      },
      //下一页
      nextAction() {
        let pageArr = this.pageNums
        // if (pageArr[5] >= 6){
        //   this.currentIndex = 5
        // }
        this.pageNums.splice(10, 0, (pageArr[9] + 1))
        this.pageNums.splice(0, 1)
      },
      //上一页
      preAction() {
        let pageArr = this.pageNums
        // if (pageArr[5] >= 6){
        //   this.currentIndex = 5
        // }
        // else{
        //   if (this.currentIndex === 0) return
        //   this.currentIndex -= 1
        // }
        if (pageArr[0] === 1) return
        this.pageNums.splice(0, 0, (pageArr[0] - 1))
        this.pageNums.splice(10, 1)
      }

    }
  }
</script>

<style lang="scss" scoped>
  #pageination {
    @mixin hoverP {
      cursor: pointer;
    }
    span {
      @include hoverP;
    }
    button {
      @include hoverP;
      padding: 10px 0;
      width: 45px;
      &.activity {
        background: gray;
      }
      &:focus {
        outline: none;
      }

    }

  }
</style>
