import Vue from 'vue'
import vuescroll from 'vuescroll'

// 你可以在这里设置全局配置
Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      background: '#ea5038',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      keepShow: true
    }
  },
  name: 'vuescroll'
})
