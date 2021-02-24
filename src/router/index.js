import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录页面
import Login from '@/views/Login'
Vue.use(VueRouter)

const routes = [
  // 配置登录路由
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
