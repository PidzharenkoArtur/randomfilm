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
                   }
      },
      mutations: {
        getDataMovie (state, data) {
          state.movieData.title = data.Title;
          state.movieData.genre = data.Genre;
          state.movieData.country = data.Country;
          state.movieData.imdbRating = data.imdbRating;
          state.movieData.plot = data.Plot; 
          state.movieData.poster = data.Poster;
        }
      },
      actions: {
        getDataMovieAsync(context) {
          axios
            .get("http://www.omdbapi.com/?apikey=1fda2e1d&i=tt2756032&type=movie")
            //.get("http://www.omdbapi.com/?apikey=1fda2e1d&s=The One") поиск по слову
            .then(response => {
              context.commit('getDataMovie', response.data);
		  	    });
        }
      }
});