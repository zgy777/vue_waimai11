module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api':{
        target:'http://localhost:4000',//别忘记加协议！！如http://
        secure: false, // 如果是 https ,需要开启这个选项
        changeOrigin: true,//开启跨域
        pathRewrite: {
          '^/api': '/'   //正则匹配，相当于用api替换target中的地址
        }
      }

    },

  }
}
