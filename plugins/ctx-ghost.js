import Vue from 'vue'
import GhostContentAPI from '@tryghost/content-api'
const ghost = new GhostContentAPI({
  host: 'https://blog.callmesoul.cn',
  key: '19ba2d8ac5444b614084c49e6c',
  version: 'v2'
})
Vue.prototype.$ghost = ghost
export default (root, inject) => {
  root.$ghost = ghost
}
