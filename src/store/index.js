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
                   Poster:""
                   },
        look: false
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
        isLook (state) {
          state.look = false;
        }
      },
      actions: {
        getDataMovieAsync(context, parameters) {
          axios
            .get(context.rootState.baseUrl + "?apikey=" + context.rootState.apiKey + parameters)
            .then(response => {
              setTimeout(()=> {
                context.commit('getDataMovie', response.data);
                context.rootState.look = true;
              }, 1000);
		  	    });
        }
      }
});