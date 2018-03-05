import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Note from '@/pages/Note'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/notes/:id',
      name: 'Note',
      component: Note
    },
    {
      path: '/notes/:id/edit',
      name: 'Note',
      component: Dashboard
    }
  ]
})
