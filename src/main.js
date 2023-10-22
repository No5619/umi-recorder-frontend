import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入bootstrap_css
import "bootstrap/dist/css/bootstrap.min.css"
//引入bootstrap_js
import "bootstrap/dist/js/bootstrap.js"

//引入global function
import ApiUtil from "./plugins/ApiUtil.js"
import Cache from "./plugins/Cache.js"

//应用插件
Vue.use(VueRouter)
Vue.use(ApiUtil)
Vue.use(Cache)

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')



router.beforeEach((to, from, next) => {

	if (to.path != from.path) {
		if (vm.__proto__.$cache.loggedin == false && to.path != "/"){
			router.push({path: '/'});
    }

    next();
  }
})