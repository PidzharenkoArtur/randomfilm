import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	    state: {
        movieData: {
                   title:"",
                   imdbRating:"",
                   genre:"",
                   country:"",
                   plot:"",
                   poster:""
                   },
        randomNumber: ""
      },
        
      mutations: {
        getDataMovie (state, data) {
          state.movieData.title = data.Title;
          state.movieData.genre = data.Genre;
          state.movieData.country = data.Country;
          state.movieData.imdbRating = data.imdbRating;
          state.movieData.plot = data.Plot; 
          state.movieData.poster = data.Poster;
        },
        createIdMovie (state) {
          let max, min, iter, iterMax, randomNumber;

          iterMax      = 4;
          iter         = 0;
          max          = 0;
          min          = 9;
          randomNumber = "";
          
          while(iter < iterMax) {
            randomNumber += Math.floor(Math.random() * (max - min)) + min;
            iter++;  
          }
          state.randomNumber = randomNumber;
        }
      },
      actions: {
        getDataMovieAsync(context) {
          let url;

          context.commit('createIdMovie');
          url = "http://www.omdbapi.com/?apikey=1fda2e1d&i=tt128"+ context.rootState.randomNumber + "&type=movie";
          
          axios
            .get(url)
            .then(response => {
              
              context.commit('getDataMovie', response.data);
		  	    });
        }
      }
});