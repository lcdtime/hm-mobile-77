module.exports = {
    plugins: {
        // 配置根字大小配置 postcss 插件 (37.5 计算方式 => 屏幕宽度 / 10)  设计图对应的标准屏, 其他屏幕会自适应缩放的
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      }
    }
  }
