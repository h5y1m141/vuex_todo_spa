import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    currentProduct: {}
  },
  getters: {
  },
  mutations: {
    addToCart (state, product) {
      state.carts.push(product)
    }
  },
  actions: {
    addToCart (context, label) {
      alert('store dispatch' + label)
    }
  }
})
