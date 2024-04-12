import { resolveDirective } from "vue"
import {createRouter,createWebHashHistory} from "vue-router"
import page0 from '@/page/page0/page0.vue'
import page8 from '@/page/page8/page8.vue'
import page9 from '@/page/page9/page9.vue'
import page2 from '@/page/page2/data.vue'
import page3 from '@/page/page3/evalue.vue'
import page1 from '@/page/bk/backgroud.vue'


const routes=[
	{ //访客首页
		path: '/page0',
		name: 'page0',
		component: page0,
	},
	{ //认识桥梁（桥梁类型）
		path: '/page8',
		name: 'page8',
		component: page8,
	},
	{ //认识桥梁（中国桥梁历史）
		path: '/page9',
		name: 'page9',
		component: page9,
	},

	{//用户页背景
		path:'/user',
		name:'page1',
		component: page1,
		children:[
			{
				//用户数据查询页
				path:'page2',
				name:'page2',
				component:page2,
			},
			{
				//用户评估页
				path:'page3',
				name:'page3',
				component:page3,
			},
		]
	},
	
	{ 
		//登陆
		path:'/page6',
		name:'page6',
		component:()=>import(/*webpackChunkName:'page1'*/'@/page/login/page6.vue')
	},
	{ 
		//注册
		path:'/page7',
		name:'page7',
		component:()=>import(/*webpackChunkName:'page1'*/'@/page/register/page7.vue')
	},
	
	
	
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

export default router