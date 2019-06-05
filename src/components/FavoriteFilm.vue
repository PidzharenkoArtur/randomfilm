<template>
    <div>
	<section v-if="look" class="information-film">
		<div class="row">
			<div class="col col-md-12">
				<h1 class="information-film__header">{{movieData.Title}}</h1> 
			</div>
		</div>
        <div class="row">
            <div class="col col-md-12 information-film__description">
                <div class="information-film__description-poster">
                    <img :src='movieData.Poster' alt=""/>
                </div>
                <div class="information-film__characteristic">
                    <p>
                        Imdb: {{movieData.ImdbRating}}
                    </p>
                    <p>
                        Genre: {{movieData.Genre}}
                    </p>
                    <p>
                        Country: {{movieData.Country}}
                    </p>
                    <p class="information-film__text">{{movieData.Plot}}</p>  
                </div>
            </div>    
        </div>
		<div class="row">
            <div class="favorite__buttons">
                <router-link to="/listfavorites">
                    <button type="submit" @click="deleteItem(indexListFilm)" class="btn btn-primary film__button" width="27px">-</button>
                </router-link>
                <router-link to="/listfavorites">
                    <button type="submit" class="btn btn-primary film__button go-film__button">-><span>{{numberFavorites}}</span></button>
                </router-link>
                <figure class="rating">
                    <figcaption class="rating__caption">your rating:</figcaption>
                    <ul class="rating__list">
                        <li v-for="item in 5" class="rating__item" :class="[( (item -1) === indexRating ) ? 'rating__item--active' : '']" @click="putRating(item-1)" :key="item">{{item}}</li>
                    </ul>
                </figure>
            </div>
		</div>
	</section>
    <section v-if="!look" class="preloader">
        <p class="preloader__text">DOWNLOAD</p>
    </section>
    
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

	export default {
        name: 'home',
		data() {
			return {
                isPreloader: true,
                isActive: false,
                indexRating: -1
			}
        },
        updated() {
           this.changeStatePreloader(false);
        },
        created () {
            this.controlListFilm("download");
            this.showFilm();
            this.setNumberFavorites("show");
            
            this.indexRating = JSON.parse(localStorage.getItem("listFilm"))[this.indexListFilm].yourRating - 1;
            },
        computed: {
            ...mapState([
                'movieData',
                'look',
                'numberFavorites',
                'listFilm',
                'indexListFilm'
            ])
        },
		methods: {
            ...mapMutations([
               'isLook',
               'setNumberFavorites',
               'controlListFilm',
            ]),
            ...mapActions([
               'getFilm'
            ]),
            changeStatePreloader (state) {
                this.isPreloader = state;  
            },

            showFilm() {
                this.changeStatePreloader(true);
                this.isLook();
                this.getFilm("&i=" + document.location.pathname.replace('/favoriteFilm/', ''));
            },
            deleteItem(index) {
               this.controlListFilm('delete');
               this.listFilm.splice(index, 1);

               localStorage.setItem('listFilm', JSON.stringify(this.listFilm));

               this.setNumberFavorites(); 
            },
            putRating(index) {
                this.indexRating = index;
                this.listFilm[this.indexListFilm].yourRating = this.indexRating + 1;
                localStorage.setItem('listFilm', JSON.stringify(this.listFilm));
            },
		}
    }	
</script>

<style scope>
    .information-film__header {
        text-align: center;
        margin-bottom: 30px;
        color: white;
    }
    .information-film, .preloader {
		margin: 0;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-right: -50%;
    	transform: translate(-50%, -50%)
	}
    .information-film__description {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;
        color: white;
    }
    
    .information-film__description-poster {
        margin-right: 30px;
        width: 250px;
        border: 1px solid white;
    }
    .information-film__characteristic {
        margin-left: 30px;
        font-size: 18px;
    }
    .information-film__text {
        word-wrap: break-word;
        max-width: 400px;
    }
    .information-film__description-poster img {
        width: 248px;
        min-height: 335px;
    }
    .film__button:hover {
		border:2px solid #007bff!important;
	}
	.film__button, .preloader__text {
		background: 0!important;
		color: white!important;
		text-transform: uppercase;
		text-align: center;
		border: 2px solid white!important;
		margin: 0 auto;
		font-size: 25px!important;
	}
    .favorite__buttons {
        display: flex;
        width: 400px;
        margin: 0 auto;
        justify-content: space-around;
    }  
    .go-film__button {
        position: relative;
    }
    .go-film__button span {
        display: block;
        position: absolute;
        bottom: -12px;
        right: -11px;
        font-size: 14px;
        background-color: #007bff;
        min-width: 23px;
        border-radius: 50%;
    }  
    .preloader__text {
       border: 0px solid white!important;
    }
    .rating__list {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }
    .rating__caption {
        color: white;
    }
    .rating__item {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        border: 1px solid white;
        display: inline-block;
        margin-right: 5px;
        color: white;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
    }
    .rating__item:hover {
        border-color: #007bff;
    }
    .rating__item--active{
        background: #007bff;
        border-color: #007bff;
    }
</style>
