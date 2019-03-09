import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    userInfo:{
      username: 'ChiuYung',
      age: 25,
      height: 170
    }
  }
})

export default store
