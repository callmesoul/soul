import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      posts: [],
      musics: [],
      musicPlayIndex: 0,
      player: '',
      playing: false
    },
    mutations: {
      add(state) {
        state.counter++
      },
      setMusics(state, { musics }) {
        state.musics = musics
      },
      setPlayer(state, { player }) {
        state.player = player
      },
      play(state, data) {
        state.playing = true
      },
      pause(state, data) {
        state.playing = false
      },
      // 上一首
      preSong(state, data) {
        state.player.pause()
        if (state.musicPlayIndex > 0) {
          state.musicPlayIndex--
        } else {
          state.musicPlayIndex = state.musics.length - 1
        }
        state.player.src = state.musics[state.musicPlayIndex].url
        state.player.play()
      },
      // 下一首
      nextSong(state, data) {
        state.player.pause()
        if (state.musicPlayIndex < state.musics.length - 1) {
          state.musicPlayIndex++
        } else {
          state.musicPlayIndex = 0
        }
        state.player.src = state.musics[state.musicPlayIndex].url
        state.player.play()
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        debugger
      }
    }
  })

export default store
