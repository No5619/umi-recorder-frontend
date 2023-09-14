import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入bootstrap_css
import "bootstrap/dist/css/bootstrap.min.css"

//应用插件
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

//引入bootstrap_js
import "bootstrap/dist/js/bootstrap.js"
