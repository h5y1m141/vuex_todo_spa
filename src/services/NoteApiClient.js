const LATENCY = 200
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
    return true
  }
}
