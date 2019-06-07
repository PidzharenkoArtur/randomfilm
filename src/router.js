import Vue from 'vue'
import Router from 'vue-router'

import InformationFilm from './components/InformationFilm'
import ListFavorites from './components/ListFavorites'
import FavoriteFilm from './components/FavoriteFilm'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: InformationFilm,
        
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: ListFavorites,
    },
    {
      path: '/favoriteFilm/:id',
      name: 'favoriteFilm',
      component: FavoriteFilm,
  },
  ],
  mode: 'history'
})