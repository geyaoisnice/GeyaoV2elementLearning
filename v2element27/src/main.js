import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import "reset-css"
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueRouter from 'vue-router'
import { Message } from 'element-ui';

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$message=Message
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
