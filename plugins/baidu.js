//百度统计
if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  const _hmt = [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?f4e4f3d9d2532faa71e451f2ab41cbb6";
    hm.id = "baidu_tj";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
    const _hmt = [];
    (function() {
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f4e4f3d9d2532faa71e451f2ab41cbb6";
      hm.id = "baidu_tj";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  })
}
