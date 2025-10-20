import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import laoshiList from '../pages/laoshi/list'
import laoshiDetail from '../pages/laoshi/detail'
import laoshiAdd from '../pages/laoshi/add'
import jingsaileibieList from '../pages/jingsaileibie/list'
import jingsaileibieDetail from '../pages/jingsaileibie/detail'
import jingsaileibieAdd from '../pages/jingsaileibie/add'
import jingsaixiangmuList from '../pages/jingsaixiangmu/list'
import jingsaixiangmuDetail from '../pages/jingsaixiangmu/detail'
import jingsaixiangmuAdd from '../pages/jingsaixiangmu/add'
import xueshengbaomingList from '../pages/xueshengbaoming/list'
import xueshengbaomingDetail from '../pages/xueshengbaoming/detail'
import xueshengbaomingAdd from '../pages/xueshengbaoming/add'
import laoshibaomingList from '../pages/laoshibaoming/list'
import laoshibaomingDetail from '../pages/laoshibaoming/detail'
import laoshibaomingAdd from '../pages/laoshibaoming/add'
import xueshengdakaList from '../pages/xueshengdaka/list'
import xueshengdakaDetail from '../pages/xueshengdaka/detail'
import xueshengdakaAdd from '../pages/xueshengdaka/add'
import laoshidakaList from '../pages/laoshidaka/list'
import laoshidakaDetail from '../pages/laoshidaka/detail'
import laoshidakaAdd from '../pages/laoshidaka/add'
import xueshengchengguoList from '../pages/xueshengchengguo/list'
import xueshengchengguoDetail from '../pages/xueshengchengguo/detail'
import xueshengchengguoAdd from '../pages/xueshengchengguo/add'
import laoshichengguoList from '../pages/laoshichengguo/list'
import laoshichengguoDetail from '../pages/laoshichengguo/detail'
import laoshichengguoAdd from '../pages/laoshichengguo/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'laoshi',
					component: laoshiList
				},
				{
					path: 'laoshiDetail',
					component: laoshiDetail
				},
				{
					path: 'laoshiAdd',
					component: laoshiAdd
				},
				{
					path: 'jingsaileibie',
					component: jingsaileibieList
				},
				{
					path: 'jingsaileibieDetail',
					component: jingsaileibieDetail
				},
				{
					path: 'jingsaileibieAdd',
					component: jingsaileibieAdd
				},
				{
					path: 'jingsaixiangmu',
					component: jingsaixiangmuList
				},
				{
					path: 'jingsaixiangmuDetail',
					component: jingsaixiangmuDetail
				},
				{
					path: 'jingsaixiangmuAdd',
					component: jingsaixiangmuAdd
				},
				{
					path: 'xueshengbaoming',
					component: xueshengbaomingList
				},
				{
					path: 'xueshengbaomingDetail',
					component: xueshengbaomingDetail
				},
				{
					path: 'xueshengbaomingAdd',
					component: xueshengbaomingAdd
				},
				{
					path: 'laoshibaoming',
					component: laoshibaomingList
				},
				{
					path: 'laoshibaomingDetail',
					component: laoshibaomingDetail
				},
				{
					path: 'laoshibaomingAdd',
					component: laoshibaomingAdd
				},
				{
					path: 'xueshengdaka',
					component: xueshengdakaList
				},
				{
					path: 'xueshengdakaDetail',
					component: xueshengdakaDetail
				},
				{
					path: 'xueshengdakaAdd',
					component: xueshengdakaAdd
				},
				{
					path: 'laoshidaka',
					component: laoshidakaList
				},
				{
					path: 'laoshidakaDetail',
					component: laoshidakaDetail
				},
				{
					path: 'laoshidakaAdd',
					component: laoshidakaAdd
				},
				{
					path: 'xueshengchengguo',
					component: xueshengchengguoList
				},
				{
					path: 'xueshengchengguoDetail',
					component: xueshengchengguoDetail
				},
				{
					path: 'xueshengchengguoAdd',
					component: xueshengchengguoAdd
				},
				{
					path: 'laoshichengguo',
					component: laoshichengguoList
				},
				{
					path: 'laoshichengguoDetail',
					component: laoshichengguoDetail
				},
				{
					path: 'laoshichengguoAdd',
					component: laoshichengguoAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
