
<template>
  <div class="main-top height-100 flex">
    <a class="mobile-nav-btn iconfont icon-fenlei"></a>
    <a class="mobile-logo iconfont icon-logo" href=""></a>
    <!--主页上左部分-->
    <div class="height-100 main-left">
      <div class="main-left-top">
        <div class="logo"><a class="iconfont icon-logo" href=""></a></div>
        <div class="nav">
          <ul>
            <li>
              <a href="">
                <div class="icon"><i class="iconfont icon-home"></i></div>
                <div class="name">
                  <div class="cnname">首页</div>
                  <div class="enname">Home</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/tag/webfront/">
                <div class="icon"><i class="iconfont icon-code"></i></div>
                <div class="name">
                  <div class="cnname">前端开发</div>
                  <div class="enname">Frontend Development</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/tag/xiao-cheng-xu/">
                <div class="icon"><i class="iconfont icon-xiaochengxu"></i></div>
                <div class="name">
                  <div class="cnname">小程序</div>
                  <div class="enname">Mini Programs</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/tag/linux/">
                <div class="icon"><i class="iconfont icon-linux"></i></div>
                <div class="name">
                  <div class="cnname">Linux</div>
                  <div class="enname">Linux About</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/tag/design/">
                <div class="icon"><i class="iconfont icon-design"></i></div>
                <div class="name">
                  <div class="cnname">设计</div>
                  <div class="enname">Design About</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/tag/movie/">
                <div class="icon"><i class="iconfont icon-movie"></i></div>
                <div class="name">
                  <div class="cnname">电影</div>
                  <div class="enname">Movie About</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/tag/other/">
                <div class="icon"><i class="iconfont icon-other"></i></div>
                <div class="name">
                  <div class="cnname">杂记</div>
                  <div class="enname">All Other Thing</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/link/">
                <div class="icon"><i class="iconfont icon-link"></i></div>
                <div class="name">
                  <div class="cnname">友情链接</div>
                  <div class="enname">Friends Web Link</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="social flex flex-align-center ">
        <div class="flex1 text-center">
          <div class="icon relative">
            <a class="iconfont icon-wechat1193418easyiconnet"></a>
            <div class="float">
              <img src="http://oyz3pjs26.bkt.clouddn.com/qrcode_for_gh_b4c00b84720c_258%20%281%29.jpg">
            </div>
          </div>
        </div>
        <div class="flex1 text-center">
          <div class="icon"><a class="iconfont icon-qq" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=547437716&site=qq&menu=yes"></a></div>
        </div>
        <div class="flex1 text-center">
          <div class="icon"><a class="iconfont icon-weibo" target="_blank" href="https://weibo.com/tellmesoul/"></a></div>
        </div>
      </div>
    </div>
    <!--主页上右部分-->
    <nuxt />
    <!--<div class="flex1 height-100 main-right flex flex-v">
      <div class="foter">
        <a href="" target="_blank">&copy; @blog.title date</a>
        &lt;!&ndash;<a target="_blank">Design：Oriharaki</a>&ndash;&gt;
        <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
        <a>粤ICP备15053557号</a>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '~/assets/style/css.scss';
@import '~/assets/style/iconfont.css';
</style>
