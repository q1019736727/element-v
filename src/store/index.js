import Vuex from 'vuex'
import Vue from 'vue'
import houseStore from './house'
import bindingStore from './binding'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    house:houseStore, //house数据store
    binding:bindingStore  //绑定房产store
  }
})

export default store
