import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      posts: [],
      musics: [],
      musicPlayIndex: 0,
      player: ''
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
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        debugger
      }
    }
  })

export default store
