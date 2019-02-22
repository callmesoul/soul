<template>
  <div id="frame" class="flex1 flex flex-v">
    <div class="box flex1">
      <!--<div class="box-top">-->
      <!--<span>首页</span>-->
      <!--</div>-->
      <div class="box-content">
        <div :bar="bar" v-swiper:mySwiper="swiperOption" @someSwiperEvent="callback">
          <div class="swiper-wrapper">
            <a v-for="post in posts" :key="post.id" href="" class="post-item swiper-slide flex flex-v">
              <div class="image"><img src="~/assets/images/default.jpg"></div>
              <div class="content-warp flex1">
                <div class="title">&lt; {{post.title}} &gt;</div>
                <div class="content">
                  {{post.excerpt}}
                </div>
                <div class="other">
                  <!--<a><i class="iconfont icon-iconfontordinaryliulan"></i>52</a>-->
                  <!--<a><i class="iconfont icon-icon27"></i>52</a>-->
                  <span><i class="iconfont icon-shijian"></i>date format="YYYY/MM/DD"</span>
                </div>
              </div>
            </a>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $ghost, app }) {
    const res = await $ghost.posts.browse({
      limit: 12,
      include: 'tags,authors'
    })
    const pagation = res.meta.pagination
    delete res.meta
    const posts = res

    return {
      posts: posts,
      pagation: pagation
    }
  },
  data() {
    return {
      posts: [],
      pagation: {},
      rail: {
        background: '#ea5038',
        opacity: 1,
        size: '6px',
        specifyBorderRadius: false,
        gutterOfEnds: null,
        gutterOfSide: '2px',
        keepShow: true
      },
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
      },
      swiperOption: {
        mousewheel: true,
        slidesPerView: 4,
        spaceBetween: 30,
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
</style>
