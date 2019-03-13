const GhostContentAPI = require('@tryghost/content-api')
const pkg = require('./package')

const ghost = new GhostContentAPI({
  host: 'https://blog.callmesoul.cn',
  key: '19ba2d8ac5444b614084c49e6c',
  version: 'v2'
})

module.exports = {
  mode: 'universal',

  cache: {
    max: 1000,
    maxAge: 900000
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'CallMeSoul',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'baidu_ssp_verify', content: 'a8764f355637ffe0bd6133bb211d8b15' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  ghost: ghost,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/css.scss', '~/assets/style/iconfont.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/axios.js'},
    {src:'~/plugins/ctx-ghost.js'},
    {src:'~/plugins/scroller.js'},
    {src:'~/plugins/swiper.js'},
    {src:'~/plugins/highlight.js'},
    {src:'~/plugins/baidu.js',ssr:false},
    // {src:'~/plugins/googleAd.js',ssr:false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/component-cache',
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'https://blog.callmesoul.cn/ghost/api/v2/content',
    https: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
