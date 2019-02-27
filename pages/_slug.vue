<template>
  <div class="article-content flex1">
    <vuescroll class="article-content-container">
      <div class="article-title row">
        <div class="title">{{post.title}}</div>
        <div class=" other"><!--<i class="iconfont icon-iconfontordinaryliulan"></i> 56--> <i class="iconfont icon-shijian"></i> ate format="YYYY/MM/DD"</div>
      </div>
      <div class="article-message markdown-body">
        <div class="text" v-html="post.html" v-highlight>
        </div>
      </div>
      <div id="gitalk-container"></div>
    </vuescroll>
  </div>
</template>

<script>
// import dayjs from 'dayjs'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
export default {
  name: 'tag',
  head() {
    return {
      title: `${this.post.title}--${this.$store.state.settings.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.post.plaintext}` }
      ]
    }
  },
  async asyncData({ $ghost, params }) {
    const res = await $ghost.posts.read(
      { slug: params.slug },
      {
        formats: ['html', 'plaintext']
      }
    )
    return {
      post: res
    }
  },
  data() {
    return {
      post: {},
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
  mounted() {
    const gitalk = new Gitalk({
      clientID: '85810192d72d7f763a9a',
      clientSecret: 'e9867192041e53ad9f4581db6e50bbe7373a090d',
      repo: 'myblog',
      owner: 'callmesoul',
      admin: ['callmesoul'],
      id: this.post.id, // Ensure uniqueness and length less than 50
      distractionFreeMode: false // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-container')
  },
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

<style lang="scss" scoped src="./_slug.scss">
</style>
