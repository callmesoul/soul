
<template>
  <div class="main height-100 flex flex-v">
    <div class="main-top flex flex1">
      <nuxt-link to="/home" class="mobile-nav-btn iconfont icon-fenlei"></nuxt-link>
      <nuxt-link to="/home" class="mobile-logo iconfont icon-logo" ></nuxt-link>
      <!--主页上左部分-->
      <div class="height-100 main-left">
        <div class="main-left-top">
          <div class="logo"><nuxt-link to="/home" class="iconfont icon-logo"></nuxt-link></div>
          <div class="nav">
            <nuxt-link to="/home">
              <div class="icon"><i class="iconfont icon-home"></i></div>
              <div class="name">
                <div class="cnname">首页</div>
                <div class="enname">Home</div>
              </div>
            </nuxt-link>
            <nuxt-link :to="'/tag/'+menu.slug" v-for="(menu,index) in menus" :key="index">
              <div class="icon"><i class="iconfont" :class="'icon-'+menu.slug"></i></div>
              <div class="name">
                <div class="cnname">{{menu.name}}</div>
                <div class="enname">{{menu.description}}</div>
              </div>
            </nuxt-link>
            <!--<a href="/link/">
              <div class="icon"><i class="iconfont icon-link"></i></div>
              <div class="name">
                <div class="cnname">友情链接</div>
                <div class="enname">Friends Web Link</div>
              </div>
            </a>-->
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
          <a @click="preSong"><span class="iconfont icon-shangyishou"></span></a>
          <a @click="playControl"><span class="iconfont" :class="$store.state.playing?'icon-kaishi':'icon-kaishi1'"></span></a>
          <a @click="nextSong"><span class="iconfont icon-xiayishou-copy"></span></a>
        </div>
        <div class="msg">
          <span class="time">{{currentTimeString}}</span>
          <div class="line" ref="progress-line-warp">
            <div class="song-msg">{{$store.state.musics && $store.state.musics[$store.state.musicPlayIndex] ? $store.state.musics[$store.state.musicPlayIndex].name + '-' + $store.state.musics[$store.state.musicPlayIndex].singer:''}}</div>
            <div class="current-line" ref="progress-line">
              <a tag="a" class="target" v-on:mousedown.prevent="mousedown"></a>
            </div>
          </div>
          <span class="all-time">{{durationString}}</span>
        </div>
        <div class="right-control">
          <a class="order-btn flex flex-align-center" @click="toogleShowMusicList">
            <span class="iconfont icon-ttpodicon"></span>
            <span class="number flex1">{{$store.state.musics.length}}</span>
          </a>
        </div>
        <audio class="mian-audio" ref="main-audio" controls="controls">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    <div class="music-list" :class="{'active':isShowMusicList}">
      <vuescroll>
        <a class="music-item flex flex-align-center" :class="{'active':index==$store.state.musicPlayIndex}" v-for="(music,index) in $store.state.musics" v-bind:key="index" @click="playIndex(index)">
          <span class="iconfont" :class="index==$store.state.musicPlayIndex?'icon-kaishi':'icon-kaishi1'"></span>
          <span class="title flex1">{{music.name}}-{{music.singer}}</span>
        </a>
      </vuescroll>
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
      duration: 0,
      isDrag: false, // 是否拖动进度条
      mousedownClientX: 0,
      isShowMusicList: false, // 是否显示播放列表
      menus: []
    }
  },
  async created() {},
  async mounted() {
    const menuRes = await this.$ghost.tags.browse()
    if (menuRes.meta) {
      delete menuRes.meta
    }
    this.menus = menuRes
    const setRes = await this.$ghost.settings.browse()
    this.$store.commit('initSettings',{settings:setRes})

    const res = await this.$axios.get(
      'https://api.bzqll.com/music/netease/songList?key=579621905&id=2008272804&limit=10&offset=0'
    )
    if (res && res.data && res.data.data && res.data.data.songs) {
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
      if (this.$refs['progress-line'] && !this.isDrag) {
        // !this.isDrag 拖动的时候不让播放进度去控制进度条
        let percent = parseFloat(this.currentTime / this.duration)
        percent = percent * 100
        this.$refs['progress-line'].style.width = percent + '%'
      }
    },
    mousedown(e) {
      let mousedownClientX = e.clientX
      const progressLine = this.$refs['progress-line']
      const progressLineWarp = this.$refs['progress-line-warp']
      let currentTime = 0
      this.isDrag = true
      const self = this
      document.addEventListener('mousemove', mousemove, false)
      document.addEventListener('mouseup', mouseup, false)
      function mousemove(res) {
        // 鼠标拖动控制进度条的长度
        const dragWidth = res.clientX - mousedownClientX
        mousedownClientX = res.clientX
        const clientWidth = progressLine.clientWidth
        let newClientWidth = clientWidth + dragWidth
        const warpClientWidth = progressLineWarp.clientWidth
        if (newClientWidth < 0) {
          newClientWidth = 0
        } else if (newClientWidth > warpClientWidth) {
          newClientWidth = warpClientWidth
        }
        progressLine.style.width = newClientWidth + 'px'
        // 鼠标拖动控制 显示 当前时间
        const percent = progressLine.clientWidth / progressLineWarp.clientWidth
        currentTime = self.duration * percent
        self.currentTimeString = self.setTimeFormat(currentTime)
      }
      function mouseup() {
        // 把最后选的时间设为音乐的当前播放时间
        self.$store.state.player.currentTime = currentTime
        self.isDrag = false
        document.removeEventListener('mousemove', mousemove, false)
        document.removeEventListener('mouseup', mouseup, false)
      }
    },
    playIndex(index) {
      this.$store.commit('playIndex', { index: index })
    },
    // 隐藏/显示播放列表
    toogleShowMusicList() {
      this.isShowMusicList = !this.isShowMusicList
    }
  }
}
</script>
<style lang="scss" scoped src="./default.scss"></style>
