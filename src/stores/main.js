import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    note: {}
  },
  getters: {
    initialNotes: state => {
      state.currentProduct = state.notes[0]
      return state.notes
    }
  },
  mutations: {
    initNotes (state, notes) {
      notes.forEach(function (product, index, array) {
        state.notes.push(product)
      })
    },
    addToNote (state, note) {
      state.notes.push(note)
    },
    selectNote (state, note) {
      state.note = note
    }
  },
  actions: {
    initNotes (context, notes) {
      context.commit('initNotes', notes)
    },
    addToNote (context, label) {
      alert('store dispatch' + label)
    },
    selectNote (context, note) {
      context.commit('selectNote', note)
    }
  }
})
