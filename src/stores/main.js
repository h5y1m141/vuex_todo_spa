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
      state.currentstate = state.notes[0]
      return state.notes
    }
  },
  mutations: {
    initNotes (state, notes) {
      notes.forEach(function (_note, index, array) {
        state.notes.push(_note)
      })
    },
    addToNote (state, note) {
      state.notes.push(note)
    },
    selectNote (state, note) {
      state.note = note
    },
    updateNote (state, note) {
      state.notes.forEach(function (_note, index, array) {
        if (_note.id === note.id) {
          _note = note
          state.note = note
        }
      })
    },
    deleteNote (state, note) {
      state.notes = state.notes.filter(_note => _note.id !== note.id)
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
    },
    updateNote (context, note) {
      context.commit('updateNote', note)
    },
    deleteNote (context, note) {
      context.commit('deleteNote', note)
    }
  }
})
