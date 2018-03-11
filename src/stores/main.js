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
      const d = new Date()
      const updated = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.toTimeString().split(' ')[0]}`
      const id = this.state.notes.length + 1
      const note = {
        id: id,
        title: 'Untitled',
        body: '',
        user: 'MyUserName',
        updated: updated
      }
      this.state.notes.unshift(note)
      context.commit('addToNote', note)
    },
    selectNote (context, note) {
      context.commit('selectNote', note)
    }
  }
})
