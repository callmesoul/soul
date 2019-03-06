//百度统计
if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  const _hmt = [];
  //百度统计
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?f4e4f3d9d2532faa71e451f2ab41cbb6";
    hm.id = "baidu_tj";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  //百度站长
  (function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    bp.id = "baidu_zz";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  })();
}

export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
    const _hmt = [];
    //百度统计
    (function() {
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f4e4f3d9d2532faa71e451f2ab41cbb6";
      hm.id = "baidu_tj";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    //百度站长
    (function(){
      document.getElementById('baidu_zz') && document.getElementById('baidu_zz').remove();
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      }
      else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      bp.id = "baidu_zz";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
  })
}
