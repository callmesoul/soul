import GhostContentAPI from '@tryghost/content-api'
const ghost = new GhostContentAPI({
  host: 'https://blog.callmesoul.cn',
  key: '19ba2d8ac5444b614084c49e6c',
  version: 'v2'
})

export default (root, inject) => {
  root.$ghost = ghost
}
