const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = ({
  lintOnSave:false,
  publicPath: './', // 适用于相对路径
})
