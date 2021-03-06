// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@/common/common.scss'//引入初始样式
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

//默认引入样式
// import 'element-ui/lib/theme-chalk/index.css';

//修改主题后引入样式方式
import  '../theme/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
