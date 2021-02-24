// 下载并导入axios 将axios基地址单独封装到一个js文件中
import axios from 'axios'
// 原地址: http://ttapi.research.itcast.cn/app/
// 现地址: http://toutiao-app.itheima.net/，需要去掉/app路径
// 原接口：url: '/app/v1_1/articles'，现在需要删除'app'：url: '/v1_1/articles'
const instance = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/app/', // 旧  址
  baseURL: 'http://toutiao-app.itheima.net/', // 新地址
  timeout: 5000
})
// 响应请求
// 请求 导出 在main.js中导入 并挂载给vue 原型
export default instance
