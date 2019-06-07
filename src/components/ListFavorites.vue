<template>
    <section class="list-favorites">
        <div class="row">
            <ul class="list-group list-favorites__list">
                <li class="list-group-item list-favorites__item" v-for='(list, index) in listFilm' v-bind:key="index">
                    <span class="list-favorites__name">Title:</span> {{list.Title}}
                    <span class="list-favorites__name">Imdb:</span> {{list.ImdbRating}}
                    <span class="list-favorites__name">Rating:</span> {{list.yourRating}}
                    <router-link :to="{ name: 'favoriteFilm', params: { id: list.imdbID }}">
                        <button @click="saveIndexFilm(index)" class="btn btn-primary film__button list-favorites__show">-></button>
                    </router-link>
                    <button @click="deleteItem(index)" class="btn btn-primary film__button list-favorites__close">x</button>
                </li>
            </ul>
		</div>
    </section>    
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

	export default {
		props: [],
		data() {
			return {
                listMovies: null
			}
        },
        
        computed: {
            ...mapState([
                'movieData',
                'listFilm'    
            ]),
        },
        created() {
          this.controlListFilm("download");
        },
		methods: {
            ...mapMutations([
                'controlListFilm',
                'setNumberFavorites',
                'setIndexListFilm'
            ]),
            deleteItem(index) {
               this.controlListFilm('delete');
               this.listFilm.splice(index, 1);

               localStorage.setItem('listFilm', JSON.stringify(this.listFilm));

               this.setNumberFavorites(); 
            },
            saveIndexFilm(index) {
                this.setIndexListFilm(index);
            }
		}
    }	
</script>

<style scope>
    .list-favorites__list {
        margin: 0 auto;
        width: 60%;
    }
    .list-favorites__item {
        position: relative;
        background: 0;
        color: white;
        border:1px solid white;
    }
    .list-favorites__close {
        position: absolute;
        top: -14px;
        right: -12px;
        transform: scale(0.5);
    }
    .list-favorites__show {
        position: absolute;
        top: -14px;
        right: 10px;
        transform: scale(0.5);
    }
    .list-favorites__name {
        color: #007bff;
        padding-left: 35px;
    }
</style>
