module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        // '@':'src',
        // 'assets':'src/assets',
        // 'components':'src/components',
        // 'network':'src/network',
        // 'router':'src/router',
        // 'views':'src/views',
        // 'common':'src/common',
        // 'store':'src/store'
          'assets':'@/assets',
          'components':'@/components',
          'network':'@/network',
          'router':'@/router',
          'views':'@/views',
          'common':'@/common',
          'store':'@/store'
      }
    }
  }
}
