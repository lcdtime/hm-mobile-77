<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-icon name="chat-o" />
    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
    <van-switch v-model="checked" />
    <router-view />
    <div id="box">
      <p>123</p>
    </div> -->
    <!-- 登录页面 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  created () {
    // 验证一下请求地址-完事删掉
    this.$http('/').then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss">
// scss 是新语法  sass是旧语法(旧语法书写不能加;不能加{} 和 styules类似)
// scss 和 less类似,变量的定义($变量名),函数的定义有些不一样....
$color: green;
#app {
  #box {
    width: 200px;
    height: 200px;
    background-color: pink;
    p {
      color: $color;
    }
  }
}
// #app
//   p
//     background-color: pink
//     width: 200px
//     height: 200px
</style>
