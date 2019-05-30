import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	    state: {
        baseUrl: "https://www.omdbapi.com/?",
        apiKey: "apikey=1fda2e1d",
        movieData: {
                   Title:"",
                   ImdbRating:"",
                   Genre:"",
                   Country:"",
                   Plot:"",
                   Poster:""
                   },
      },
        
      mutations: {
        getDataMovie (state, data) {
          state.movieData.Title      = data.Title;
          state.movieData.Genre      = data.Genre;
          state.movieData.Country    = data.Country;
          state.movieData.ImdbRating = data.imdbRating;
          state.movieData.Plot       = data.Plot; 
          state.movieData.Poster     = data.Poster;
        },
      },
      actions: {
        getDataMovieAsync(context, parameters) {
          axios
            .get(context.rootState.baseUrl + context.rootState.apiKey + parameters)
            .then(response => {
              
              context.commit('getDataMovie', response.data);
		  	    });
        }
      }
});