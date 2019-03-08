<template>
  <div id="Home">
    <topnav></topnav>
    <div class="buttom">
      <div class="homeWrapper">
        <el-menu
          class="menu"
          background-color="#f5f5f5">
          <el-submenu v-for="(menuitem,menuIndex) in menuList" :index="menuIndex.toString()">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>{{menuitem.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(itemname,itemIndex) in menuitem.menus"
                @click="selectMenuItem"
                :index="itemIndex | computedIndex(menuIndex)">{{itemname}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="selectDetail">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import topnav from './home/Topnav'
  export default {
    name: "Home",
    data(){
      return{
        menuList:[
          {title:'停车缴费管理',menus:['缴费订单','结算商户设置']},
          {title:'停前端显示配置',menus:['Banner配置','公告管理']},
          {title:'商户管理',menus:['客户绑定信息审核','客户信息管理']},
          {title:'物业单据管理',menus:['保修单','投诉建议单','物业缴费订单','注册数据统计','绑定数据统计']},
          {title:'物业基础信息管理',menus:['公司信息维护','项目信息维护','小区信息维护','初始数据配置','单元信息维护','收房信息管理','车位管理']},
          {title:'全域生活方式',menus:['活动管理','订单管理','退款单管理','城市站点管理']},
          {title:'营销活动管理',menus:['推广拉新','金像奖']},
          {title:'会员信息管理',menus:['会员列表','身份认证审核']},
          {title:'积分管理',menus:['积分任务配置','消费返积分配置','积分清单','积分成本核算']},
          {title:'优惠券管理',menus:['优惠券列表','优惠券礼包列表']},
          {title:'用户管理',menus:['用户管理','资源管理','角色管理','授权管理']},
          {title:'系统配置',menus:['系统参数维护','短信模版']},
        ],
      }
    },
    methods: {
      selectMenuItem(e){
        console.log(e.index)
        this.$router.push({
          name:'building'
        })
      }
    },
    filters:{
      computedIndex(currentIndex,menuIndex){
        return ((menuIndex + '-' + currentIndex))
      }
    },
    components:{
      topnav,
    }
  }
</script>

<style lang="scss" scoped>
  #Home {
    .buttom{
      display: flex;
    }
    .homeWrapper{
      width: 210px;
      height: 100vh;
      background: #f5f5f5;
    }
  }

</style>
