// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/pages/App'
import router from './router'
import store from './stores/main'
import firebaseConfig from '../config/firebase'
const firebase = require('firebase')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    var result = []
    const app = firebase.initializeApp(firebaseConfig)
    const db = app.database()
    const ref = db.ref('/notes')
    ref.on('value', (snapshot) => {
      const notes = snapshot.val()
      for (let note of Object.values(notes)) {
        result.push(note)
      }
      this.$store.dispatch('initNotes', result)
    })
  },
  store
})
