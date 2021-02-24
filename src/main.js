import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入样式全局的公共样式文件
import '@/styles/index.scss'
// 导入vant-ui.js,但按需导入的文件多时在配置文件中
// import '@/utils/vant-ui.js'
import '@/utils/vant-ui.js'
// 导入基准值的配置插件
import 'amfe-flexible'
// 导入请求路由基地址 并挂载到vue的原型上
// 挂载到 vue 原型, 将来所有的组件中, 都可以 this.$http 使用这个方法
import axios from './utils/request'
Vue.prototype.$http = axios
// Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 将vant放到新的组件中简化main.js文件
// 支持链式操作
// Vue
//   .use(Button)
//   .use(Icon)
//   .use(Switch)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
