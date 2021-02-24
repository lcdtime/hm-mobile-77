<template>
  <div>
    登陆页面
    <van-nav-bar title="登录" />
    <!--  error-message="手机号格式错误" 错误按需导入 -->
    <van-cell-group>
      <van-field
        v-model="mobile"
        required
        label="手机号"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="code"
        required
        label="手机号"
        placeholder="请输入手机号"
      />
    </van-cell-group>
    <div class="login-wrap">
      <van-button class="login-btn"
      type="info"
      @click="login"
      >
      登录
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      mobile: '',
      code: ''
    }
  },
  methods: {
    login () {
      this.$http({
        method: 'POST',
        url: 'v1_0/authorizations',
        data: {
          mobile: this.mobile,
          code: this.code
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  padding: 0 20px;
  .login-btn {
    width: 100%;
    background-color: rgb(59, 120, 235);
    border-radius: 5px;
  }
}
</style>
