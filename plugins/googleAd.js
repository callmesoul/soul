// 谷歌广告 https://www.google.com/adsense

if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  const _hmt = [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    hm.id = "googleAd";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  let adsbygoogle= adsbygoogle?adsbygoogle:[];
  if(window.adsbygoogle){
    adsbygoogle=window.adsbygoogle;
  }
  adsbygoogle.push({ google_ad_client: "ca-pub-2041041323733631", enable_page_level_ads: true });
}

export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
    const _hmt = [];
    (function() {
      document.getElementById('googleAd') && document.getElementById('googleAd').remove();
      var hm = document.createElement("script");
      hm.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      hm.id = "googleAd";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    let adsbygoogle= adsbygoogle?adsbygoogle:[];
    if(window.adsbygoogle){
      adsbygoogle=window.adsbygoogle;
    }
    adsbygoogle.push({ google_ad_client: "ca-pub-2041041323733631", enable_page_level_ads: true });
  })
}
