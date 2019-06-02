import Vue from 'vue'
import Router from 'vue-router'

import InformationFilm from './components/InformationFilm'
import ListFavorites from './components/ListFavorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: InformationFilm,
        
    },
    {
        path: '/listfavorites',
        name: 'listfavorites',
        component: ListFavorites,
    },
    
  ],
  mode: 'history'
})