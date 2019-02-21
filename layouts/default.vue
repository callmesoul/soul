
<template>
  <div class="main height-100 flex flex-v">
    <div class="main-top flex flex1">
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
    <div class="main-bottom">
      <div class="music flex flex-pack-justify flex-align-center">
        <div class="control">
          <a><span class="iconfont icon-shangyishou" @click="preSong"></span></a>
          <a><span class="iconfont" :class="$store.state.playing?'icon-kaishi':'icon-kaishi1'" @click="playControl"></span></a>
          <a><span class="iconfont icon-xiayishou-copy"  @click="nextSong"></span></a>
        </div>
        <div class="msg">
          <span class="time">{{currentTimeString}}</span>
          <div class="line">
            <div class="song-msg">{{$store.state.musics && $store.state.musics[$store.state.musicPlayIndex] ? $store.state.musics[$store.state.musicPlayIndex].name + '-' + $store.state.musics[$store.state.musicPlayIndex].singer:''}}</div>
            <div class="current-line" ref="progress-line">
              <span class="target"></span>
            </div>
          </div>
          <span class="all-time">{{durationString}}</span>
        </div>
        <div class="right-control">
          <a class="order-btn flex flex-align-center">
            <span class="iconfont icon-ttpodicon"></span>
            <span class="number flex1">{{$store.state.musics.length}}</span>
          </a>
        </div>
        <audio class="mian-audio" ref="main-audio" controls="controls">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      durationString: '00:00',
      currentTime: 0,
      currentTimeString: '00:00',
      duration: 0
    }
  },
  async created() {},
  async mounted() {
    const res = await this.$axios.get(
      'https://api.bzqll.com/music/netease/songList?key=579621905&id=2008272804&limit=10&offset=0'
    )
    if (res && res.data && res.data.data && res.data.data.songs) {
      res.data.data.songs.splice(10, res.data.data.songs.length)
      const musics = res.data.data.songs
      this.$store.commit('setMusics', { musics: musics })
    }
    this.$store.commit('setPlayer', { player: this.$refs['main-audio'] })
    const index = this.$store.state.musicPlayIndex
    if (this.$store.state.musics[index]) {
      this.$store.state.player.src = this.$store.state.musics[index].url
      this.$store.state.player.load()
      this.$store.state.player.oncanplay = res => {
        this.durationString = this.setTimeFormat(res.currentTarget.duration)
        this.duration = res.currentTarget.duration
      }
      this.$store.state.player
        .play()
        .then(() => {})
        .catch(data => {})
        .finally(data => {})
      // 监听播放
      this.$store.state.player.onplay = () => {
        this.$store.commit('play')
      }
      // 监听暂停
      this.$store.state.player.onpause = () => {
        this.$store.commit('pause')
      }
      // 监听播放完
      this.$store.state.player.onended = () => {
        this.nextSong()
      }
      // 监听加载失败时 （网络错误、加载错误等）
      /* this.$store.state.player.onemptied = () => {
        debugger
        this.nextSong()
      } */
      // 监听加载错误
      this.$store.state.player.onerror = () => {
        this.nextSong()
      }
      // 监听播放进度
      this.$store.state.player.ontimeupdate = res => {
        const time = res.currentTarget.currentTime
        this.currentTimeString = this.setTimeFormat(time)
        this.currentTime = time
      }
    }
  },
  watch: {
    currentTime(val) {
      this.setProgressLineWidth()
    },
    duration(val) {
      this.setProgressLineWidth()
    }
  },
  methods: {
    /* 播放控制 */
    playControl() {
      if (this.$store.state.playing) {
        this.$store.state.player.pause()
      } else {
        this.$store.state.player
          .play()
          .then(() => {})
          .catch(data => {})
          .finally(data => {})
      }
    },
    /* 上一首 */
    preSong() {
      this.$store.commit('preSong')
    },
    /* 下一首 */
    nextSong() {
      this.$store.commit('nextSong')
    },
    // 时间格式转换
    setTimeFormat(time) {
      let min = Math.floor(time / 60).toString()
      if (min.length <= 1) {
        min = '0' + min
      }
      let sec = parseInt(time - min * 60).toString()
      if (sec.length <= 1) {
        sec = '0' + sec
      }
      return `${min}:${sec}`
    },
    // 设置进度条的宽度
    setProgressLineWidth() {
      if (this.$refs['progress-line']) {
        let percent = parseFloat(this.currentTime / this.duration)
        percent = percent * 100
        this.$refs['progress-line'].style.width = percent + '%'
      }
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/style/css.scss';
@import '~/assets/style/iconfont.css';
</style>
