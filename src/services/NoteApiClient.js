import firebaseConfig from '../../config/firebase'
const LATENCY = 200
const firebase = require('firebase')
export default {
  request (response) {
    return new Promise(resolve => {
      setTimeout(() => resolve(response), LATENCY)
    })
  },
  wait () {
    return new Promise(resolve => setTimeout(resolve, LATENCY))
  },
  fetchNotes () {
    const app = firebase.initializeApp(firebaseConfig)
    const db = app.database()
    const ref = db.ref('/notes')
    ref.on('value', (snapshot) => {
      const notes = snapshot.val()
      for (let note of Object.values(notes)) {
        console.log(note)
      }
    })
  }
}
