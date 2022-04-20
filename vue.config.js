const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const port = process.env.port || process.env.npm_config_port || 8088 // 端口

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '127.0.0.1',
    port: port,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8889`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
  lintOnSave:false, //关闭语法检查
  chainWebpack: config => {
    // 给svg规则增加⼀个排除选项
    config.module
        .rule('svg')
        .exclude.add(resolve('./src/assets/icons'))
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include
        .add(resolve('./src/assets/icons')) // 处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
  }
})
