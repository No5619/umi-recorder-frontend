// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import LoginPage from '../pages/LoginPage.vue'
import VideosListPage from '../pages/VideosListPage.vue'
import VideoPage from '../pages/VideoPage.vue'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:LoginPage
		},
		{
			path:'/VideosListPage',
			component: VideosListPage
		},
		{
			path:'/VideoPage',
			component: VideoPage
		}
	]
})
