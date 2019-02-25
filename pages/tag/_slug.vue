<template>
  <div id="frame" class="flex1 flex flex-v">
    <div class="box flex1">
      <!--<div class="box-top">-->
      <!--<span>首页</span>-->
      <!--</div>-->
      <div class="box-content">
        <div :bar="bar" v-swiper:mySwiper="swiperOption" @onSlideChangeStart="swiperCallback">
          <div class="swiper-wrapper">
            <nuxt-link :to="post.slug" v-for="post in posts" :key="post.id" href="" class="post-item swiper-slide flex flex-v">
              <div class="image">
                <img :src="post.feature_image" v-if="post.feature_image && post.feature_image!=''"></img>
                <img src="~@/assets/images/default.jpg" v-else></img>
              </div>
              <div class="content-warp flex1 flex flex-v">
                <div class="title">&lt; {{post.title}} &gt;</div>
                <div class="content flex1">
                  {{post.excerpt}}
                </div>
                <div class="other">
                  <!--<a><i class="iconfont icon-iconfontordinaryliulan"></i>52</a>-->
                  <!--<a><i class="iconfont icon-icon27"></i>52</a>-->
                  <span><i class="iconfont icon-shijian"></i>{{post.published_at}}</span>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  async asyncData({ $ghost, params }) {
    const res = await $ghost.posts.browse({
      filter: `tag:${params.slug}`,
      page: 1,
      limit: 12
    })
    const pagation = res.meta.pagination
    pagation.filter = `tag:${params.slug}`
    delete res.meta
    res.map(item => {
      item.published_at = dayjs(item.published_at).format('YYYY-MM-DD')
    })
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
        },
        on: {
          reachEnd: () => {
            this.getPosts()
          }
        }
      }
    }
  },
  mounted() {},
  methods: {
    swiperCallback(res) {
      debugger
    },
    async getPosts() {
      if (this.pagation.page < this.pagation.pages) {
        this.pagation.page++
        const res = await this.$ghost.posts.browse(this.pagation)
        delete res.meta
        this.posts = this.posts.concat(res)
      } else {
        this.pagation.nothing = true
      }
    }
  }
}
</script>

<style lang="scss">
</style>
