module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'development' ? './' : '././',
  outputDir: 'dist',
  devServer: {
    proxy: {
      '/rag_chat': {
        target: 'http://212.129.244.75:8088',
        changeOrigin: true
      }
    }
  }

}