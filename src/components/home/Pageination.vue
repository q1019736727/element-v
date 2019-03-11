<template>
  <div onselectstart="return false" id="pageination">
    <span @click="topAction"><i class="el-icon-d-arrow-left"></i></span>
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
        currentIndex: 0,//当前选中状态
        currentPage: 1,//当前页码
      }
    },
    methods: {
      clickPage(ele) {
        let index = parseInt(ele.currentTarget.innerHTML) - 1
        let value = parseInt(ele.currentTarget.innerHTML)
        if (value >= 6) {
          this.currentIndex = 5
          this.pageNums.splice(0,10)
          let num = -1
          while (num<9){
            num++
            this.pageNums[num] = value-(5-num)
          }
        } else {
          this.currentIndex = index
        }
      },
      //下一页
      nextAction() {
        let pageArr = this.pageNums
        this.pageNums.splice(10, 0, (pageArr[9] + 1))
        this.pageNums.splice(0, 1)
      },
      //上一页
      preAction() {
        let pageArr = this.pageNums
        if (pageArr[0] === 1) return
        this.pageNums.splice(0, 0, (pageArr[0] - 1))
        this.pageNums.splice(10, 1)
      },
      //首页
      topAction(){
        this.pageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.currentIndex = 0
      }

    }
  }
</script>

<style lang="scss" scoped>
  #pageination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    @mixin hoverP {
      cursor: pointer;
    }
    span {
      @include hoverP;
      width: 45px;
      height: 36px;
      line-height: 36px;
      border: 1px solid #cccccc;
      text-align: center;
      &:nth-child(2),&:last-child,&:nth-last-child(2){
        border-left: none;
      }

    }
    button {
      @include hoverP;
      height: 38px;
      width: 45px;
      border: 1px solid #cccccc;
      border-left: none;
      &.activity {
        background: #cccccc;
      }
      &:focus {
        outline: none;
      }

    }

  }
</style>
