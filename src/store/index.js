import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '../../config';

Vue.use(Vuex);

export const store = new Vuex.Store({
	    state: {
        baseUrl: config.baseUrl,
        apiKey:  config.apiKey,
        movieData: {
                   Title:"",
                   ImdbRating:"",
                   Genre:"",
                   Country:"",
                   Plot:"",
                   Poster:"",
                   imdbID:"",
                   yourRating:0
                   },
        look: false,
        numberFavorites: 0,
        listFilm: [],
        indexListFilm: 0
      },
        
      mutations: {
        getDataMovie (state, data) {
          state.movieData.Title      = data.Title;
          state.movieData.Genre      = data.Genre;
          state.movieData.Country    = data.Country;
          state.movieData.ImdbRating = data.imdbRating;
          state.movieData.Plot       = data.Plot; 
          state.movieData.Poster     = data.Poster;
          state.movieData.imdbID     = data.imdbID;
        },
        isLook (state) {
          state.look = false;
        },
        setIndexListFilm (state, index) {
          state.indexListFilm = index;
        },
        setNumberFavorites(state, action) {
          if (action === "show") {
            state.numberFavorites = localStorage.getItem("numberFavorite"); 
            return;
          }
          if (action === "add") {
            state.numberFavorites++;
            localStorage.setItem("numberFavorite", state.numberFavorites);    
          } else {
            state.numberFavorites--;  
            localStorage.setItem("numberFavorite", state.numberFavorites);    
          }
        },
        controlListFilm(state, mode) {
          if (mode === "delete") {
            state.listFilm = JSON.parse(localStorage.getItem("listFilm")); 
            return;
          }
          if (mode === "download") {
            state.listFilm = JSON.parse(localStorage.getItem("listFilm")) || [];
          } 
          else {
            state.listFilm.push(state.movieData);
            localStorage.setItem('listFilm', JSON.stringify(state.listFilm));
          
            state.listFilm = JSON.parse(localStorage.getItem("listFilm"));
          }
        }
      },
      actions: {
        getFilm({state, commit}, parameters) {
          axios
            .get(state.baseUrl + "?apikey=" + state.apiKey + parameters)
            .then(response => {
              setTimeout(()=> {
                commit('getDataMovie', response.data);
                state.look = true;
              }, 1000);
		  	    });
        }
      }
});